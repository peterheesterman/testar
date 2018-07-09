#!/usr/bin/env node --harmony

const version = require('../package.json').version
const program = require('commander')

const spec = require('./commands/spec')
const pickFileToEnumerateAFunctionIn = require('./commands/pick')

program
  .version(version, '-v, --version')

program
  .command('spec [sourceFile]')
  .description('Create a spec file for a src file')
  .action(spec)

program
  .command('pick <file>')
  .description('Pick a function to test from within a file')
  .action(pickFileToEnumerateAFunctionIn)
  
program.parse(process.argv)