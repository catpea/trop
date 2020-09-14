#!/usr/bin/env -S node --experimental-modules --trace-warnings
import fs from 'fs-extra';
import path from 'path';

import arrgv from 'arrgv';

import pretty from 'pretty';

import kebab from 'lodash/kebabCase.js';

import minimist from 'minimist';
import commander from 'commander';
const { Command } = commander;
const program = new Command();

// this only deals with previus next, whenever lines are added to the result set it must be allowed to update said paths.
function contextualize(lines){
  let index = 0;
  for(let line of lines){
    line.previous = line.type+':'+lines.slice(0,index).map(i=>i.type).slice(-4).reverse().join(".");
    line.next = line.type+':'+lines.slice(index+1).map(i=>i.type).join(".");
    index++;
  }
  return lines;
}

// inflate is for adding new lines to the result, it includes an automatic all to contexualize to update previous and next with newly added information.
function inflate(incoming){
  const outgoing = [];
  for(let line of incoming){
    if(line.previous.startsWith('text:blank') && line.next.startsWith('text:blank') ){
      outgoing.push({raw:'<section>', type:'html', data:`<section>`});
      outgoing.push(line);
      outgoing.push({raw:'</section>', type:'html', data:'</section>'});
    }else if(line.previous.startsWith('text:blank') ){
      outgoing.push({raw:'<section>', type:'html', data:`<section>`});
      outgoing.push(line);
    }else if(line.next.startsWith('text:blank') ){
      outgoing.push(line);
      outgoing.push({raw:'</section>', type:'html', data:'</section>'});
    }else{
      outgoing.push(line);
    }
  }
  // note the recontextualization of the outgoing
  return contextualize(outgoing);
}

function classify(line){
  if(line.raw === ''){
    line.type = 'blank';
  }else if(line.raw.match(/^<\/*[a-z]+/)){
    line.type = 'html';
  }else if(line.raw.match(/^-{3,}$/)){
    line.type = 'divider';
  }else if(line.raw.match(/^\s*\$\s*[a-zA-Z0-9-]+/)){
    const matches = line.raw.match(/^\s*\$\s*(?<command>[^ ]+)(?<args>.*)$/)
    line.type = 'command';
    line.command = matches.groups.command;
    line.argv = arrgv(matches.groups.args.trim());

    // console.log(line);
  }else{
    line.type = 'text';
  }
  return line;
}


function translate(line){

if (line.data === undefined) {

  if (line.type == 'text') {
    line.data = `<p>${line.raw}</p>`

  } else if (line.type == 'command') {
    line.data = `<p>Result of command "${line.command}" with argv of ${JSON.stringify(line.argv)}</p>`;

    console.log(line.command,  minimist(line.argv) );
    /// TODO: minimist(line.argv)

  } else if (line.type == 'divider') {
    line.data = `<section><hr></section>`

  } else {
    line.data = line.raw;
  }

}

  return line;
}

async function main({file}){
  const text = fs.readFileSync(file).toString();

  const lines = text.trim();
  const normalized = `\n${text}\n` // normalization procedure adds a standard padding so that all previous/next lookups (including start and end) contain something
  .split(/\n/)
  .map(i=>i.trim())
  .map(raw=>({raw}))
  .map(o=>classify(o));

  let contextualized = contextualize(normalized)
  // console.log(contextualized);

  let inflated = inflate(contextualized);
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



const file = program.args[0];

main({file});
