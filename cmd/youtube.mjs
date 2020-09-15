import fs from 'fs-extra';
import path from 'path';
import fetch from 'node-fetch';

export default command;

async function command(command, configuration){
  const options = Object.assign({}, configuration.cmd.youtube, command );
  const filename = `${options.prefix}${options.id}.jpg`;
  const fullpath = path.resolve(path.join(options.images, filename));
  fs.ensureDirSync(options.images);
  if(!fs.pathExistsSync(fullpath)){
    console.log('Downloading youtube thumbnail', fullpath);
    await download(`https://img.youtube.com/vi/${options.id}/0.jpg`, fullpath);
  }else{
    console.log('Download already exists', fullpath);
  }
  return options.template({
    title: options.title,
    url: path.join(options.images, filename),
  });
}

async function download(src, dest){
  if(fs.pathExistsSync(dest)) return;
  const res = await fetch(src);
  res.body.pipe(fs.createWriteStream(dest));
}
