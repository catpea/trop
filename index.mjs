#!/usr/bin/env -S node --experimental-modules --trace-warnings
import fs from 'fs-extra';
import path from 'path';
import pretty from 'pretty';

import kebab from 'lodash/kebabCase.js';

import commander from 'commander';
const { Command } = commander;
const program = new Command();

function contextualize(lines){
  let index = 0;
  for(let line of lines){
    line.previous = lines.slice(0,index).map(i=>i.type).slice(-4).reverse().join(".");
    line.next = lines.slice(index+1).map(i=>i.type).join(".");
    index++;
  }
  lines[0].first = true;
  lines[lines.length-1].last = true;
  return lines;
}
function inflate(incoming){
  const outgoing = [];

  for(let line of incoming){

    if(line.type == 'text' && (line.previous.startsWith('blank')||line.previous == '') && (line.next.startsWith('blank')||line.next == '') ){

      outgoing.push({raw:'<section>', type:'html', data:`<section>`});
      outgoing.push(line);
      outgoing.push({raw:'</section>', type:'html', data:'</section>'});

    }else if(line.type == 'text' && (line.previous.startsWith('blank')||line.previous == '') ){
      outgoing.push({raw:'<section>', type:'html', data:`<section>`});
      outgoing.push(line);

    }else if(line.type == 'text' && (line.next.startsWith('blank')||line.next == '')){
      outgoing.push(line);
      outgoing.push({raw:'</section>', type:'html', data:'</section>'});
    }else{
      outgoing.push(line);
    }


  }

  return outgoing;
}

function classify(line){
  if(line.raw === ''){
    line.type = 'blank';
  }else if(line.raw.match(/^<\/*[a-z]+/)){
    line.type = 'html';
  }else if(line.raw.match(/^-{3,}$/)){
    line.type = 'divider';
  }else{
    line.type = 'text';
  }
  return line;
}


function translate(line){

  if(line.data === undefined){
    if(line.type == 'text'){
      line.data = `<p>${line.raw}</p>`
    }else if(line.type == 'divider'){
      line.data = `<section><hr></section>`
    }else{
      line.data = line.raw;
    }

  }

  return line;
}

async function main({file}){
  const text = fs.readFileSync(file).toString();

  const lines = text
  .trim()
  .split(/\n/)
  .map(i=>i.trim())
  .map(raw=>({raw}))
  .map(o=>classify(o));

  let contextualized = contextualize(lines)
  let inflated = contextualize(inflate(contextualized))
  let translated = inflated.map(line=>translate(line));
  let finalized = translated.map(line=>line.data).join("\n");

  const result = pretty(finalized);
  console.log(result);
  return result;
}

program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza');

program.parse(process.argv);

if (program.debug) console.log(program.opts());

console.log(program);

const file = program.args[0];

main({file});
