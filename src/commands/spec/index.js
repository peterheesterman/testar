
const path = require('path')
const chalk = require('chalk')
const writer = require('../../writer')
const testFileContentWriter = require('./testFileContentWriter')

const getSpecFilePath = require('../../utils/getSpecFilePath')

module.exports = (sourceFile = './index.js') => {
  const framework = process.env.testframework

  const newTestCode = testFileContentWriter({
    framework,
    filePath: sourceFile
  })

  const specFilePath = getSpecFilePath(sourceFile);
  const fileName = path.basename(specFilePath)
  const folderName = path.basename(path.dirname(specFilePath))

  writer({
    specFilePath, 
    testContent: newTestCode,
    prePrompMessage: `\n`,
    postFileCreateMessage: chalk.green(`\n\t✨ Yay another test file! (${folderName}\\${fileName})\n`),
    preFileCreateMessage: null,
  })
}
