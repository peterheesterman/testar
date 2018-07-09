
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

const babel = require("babel-core")
const inquirer = require('inquirer')

const writer = require('../../writer')
const getFunctionDataFromAST = require('./functionFetcher')
const makeFunctionListFromNodes = require('./makeFunctionListFromNodes')

const getSpecFilePath = require('../../utils/getSpecFilePath')

module.exports = (file) => {
  const filePath = path.join(process.cwd(), file)

  if (fs.existsSync(filePath)) {
    const specFilePath = getSpecFilePath(filePath)

    babel.transformFile(filePath, (err, result) => {
      if (err) throw err;

      const nodes = getFunctionDataFromAST(result.ast)
    
      const functionListNames = makeFunctionListFromNodes(nodes)

      console.log(/* spacer*/)

      inquirer.prompt({
        type: 'list',
        name: 'functionName',
        message: 'Which function would you like to make tests for?',
        choices: functionListNames.map(item => item === "-" ? new inquirer.Separator() : item )
      }).then(({functionName}) => {

        console.log(chalk.blue(`\n\t8 tests created for ${functionName} (...${specFilePath.substr(specFilePath.length - 25)})\n`))

        const testTemplatesToAdd = "[Test Templates]"
        writer(specFilePath, testTemplatesToAdd)
      })
    })
  } 
}
