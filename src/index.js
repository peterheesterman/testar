#!/usr/bin/env node --harmony

const version = require('../package.json').version
const program = require('commander')

const pickFileToEnumerateAFunctionIn = require('./commands/pick')
const enumerate = require('./commands/enum')
const spec = require('./commands/spec')

//const whatFramework = require('./questions/framework')

program
  .version(version, '-v, --version')
  
program
  .command('spec <sourceFile>')
  .description('Create a spec file for a src file')
  .action(spec)

program
  .command('pick <file>')
  .description('Pick a function to test from within a file')
  .action(pickFileToEnumerateAFunctionIn)

program.parse(process.argv)