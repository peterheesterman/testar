const fs = require('fs')

const inquirer = require('inquirer')

const shouldMakeNewFileAt = require('../questions/shouldMakeNewFile')
//  '..//../questions/shouldMakeNewFile')

const errHandler = (err) => {
  if (err) throw err
}

module.exports = (specFilePath, testContent) => {
  if (fs.existsSync(specFilePath)) {
    fs.appendFile(specFilePath, `${testContent}`, errHandler)
  } else {
    inquirer
      .prompt(shouldMakeNewFileAt(specFilePath))
      .then(answers => {
        const { shouldMakeNewFile } = answers
        if (shouldMakeNewFile) {
          fs.writeFile(specFilePath, `${testContent}`, errHandler)
        }
      })
  }
}