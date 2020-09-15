#!/usr/bin/env -S node --experimental-modules --trace-warnings
import fs from 'fs-extra';
import path from 'path';


import pretty from 'pretty';

import kebab from 'lodash/kebabCase.js';


import commander from 'commander';
const { Command } = commander;
const program = new Command();

import contextualize from './lib/contextualize.mjs';
import inflate from './lib/inflate.mjs';
import classify from './lib/classify.mjs';
import translate from './lib/translate.mjs';

async function main({file}){

  const tropDotFile = path.join(process.cwd(), '.trop.mjs');
  const configuration0 = {cmd:null};
  if( fs.pathExistsSync(tropDotFile)) {
    const configuration1 = await (await import(tropDotFile)).default();
    Object.assign( configuration0, configuration1 );
  }

  const text = fs.readFileSync(file).toString();
  const lines = text.trim();
  const normalized = `\n${text}\n` // normalization procedure adds a standard padding so that all previous/next lookups (including start and end) contain something
  .split(/\n/)
  .map(i=>i.trim())
  .map(raw=>({raw}))
  .map(o=>classify(o));

  let contextualized = contextualize(normalized)
  let inflated = inflate(contextualized);
  let translated = await translate(inflated, configuration0);
  let finalized = translated.map(line=>line.data).join("\n");

  const result = pretty(finalized);
  console.log(result);
  return result;
}

program.option('-d, --debug', 'output extra debugging')
program.parse(process.argv);

if (program.debug) console.log(program.opts());
const file = program.args[0];
main({file});
