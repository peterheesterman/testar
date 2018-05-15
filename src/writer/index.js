const fs = require('fs')

const inquirer = require('inquirer')
const shouldMakeNewFileAt = require('../questions/shouldMakeNewFile')

const errHandler = (err) => {
  if (err) throw err
}

module.exports = ({
  specFilePath,
  testContent,

  // Messages
  preFileCreateMessage,
  postFileCreateMessage,
  prePrompMessage
}) => {
  if (fs.existsSync(specFilePath)) {
    fs.appendFile(specFilePath, `${testContent}`, errHandler)
  } else {
    prePrompMessage && console.log(prePrompMessage)
    inquirer
    .prompt(shouldMakeNewFileAt(specFilePath))
    .then(answers => {
      const { shouldMakeNewFile } = answers
      if (shouldMakeNewFile) {
        preFileCreateMessage && console.log(preFileCreateMessage)
        fs.writeFile(specFilePath, `${testContent}`, errHandler)
        postFileCreateMessage && console.log(postFileCreateMessage)
      }
    })
  }
}