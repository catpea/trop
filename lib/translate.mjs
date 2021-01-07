import minimist from 'minimist';

import youtube from '../cmd/youtube.mjs';

export default translate;

const cmd = {youtube};

// TODO: load commands using process.cwd() from ./trop-commands

async function translate(lines, configuration){
  const response = [];
  for (let line of lines) response.push( await translator(line, configuration) );
  return response;
}

async function translator(line, configuration){

  if (line.data === undefined) {

    if (line.type == 'text') {
      line.data = `<p>${line.raw}</p>`

    } else if (line.type == 'command') {

      if(cmd[line.command]) {
        line.data = await cmd[line.command](minimist(line.argv), configuration);

      }else{
        line.data = `<!-- command not found: ${line.command} -->`;

      }

    } else if (line.type == 'divider') {
      line.data = `<div class="section"><hr></div>`

    } else {
      line.data = line.raw;
    }

  }

  return line;
}
