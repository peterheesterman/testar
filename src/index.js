#!/usr/bin/env node --harmony

const version = require('../package.json').version
const program = require('commander')

const enumerateFile = require('./commands/enumin')
const enumerateFunction = require('./commands/enum')

//const whatFramework = require('./questions/framework')

program
  .version(version, '-v, --version')
  
// testar enum [file to look at methods in] - coming soon.
program
  .command('enumin <file>')
  .description('Enumerate a function in the file')
  .action(enumerateFile)
  
// testar enum output.txt 'some function handle'
program
  .command('enum <spec_file> [functionHandles...]')
  .description('Enumerate a function Handle and put the result in a file')
  .action(enumerateFunction)

program.parse(process.argv)