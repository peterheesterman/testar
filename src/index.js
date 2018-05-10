#!/usr/bin/env node --harmony

const version = require('../package.json').version
const program = require('commander')

const pickFileToEnumerateAFunctionIn = require('./commands/pick')
const enumerate = require('./commands/enum')
const spec = require('./commands/spec')

//const whatFramework = require('./questions/framework')

program
  .version(version, '-v, --version')
  
// testar pick [file to look at methods in] - coming soon.
  //  should make a nice little picker appear for which function to test.
program
  .command('pick <file>')
  .description('Enumerate a function in the file')
  .action(pickFileToEnumerateAFunctionIn)
  
program
  .command('spec <sourceFile>')
  .description('Create a spec file for a src file')
  .action(spec)

// testar enum output.txt 'some function handle'
program
  .command('enum <sourceFile> [functionHandles...]')
  .description('Enumerate a function Handle and put the result in a file')
  .action(enumerate)

program.parse(process.argv)