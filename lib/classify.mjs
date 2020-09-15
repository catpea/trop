import arrgv from 'arrgv';

export default classify;

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
