
const config = require('../../.config')
const chalk = require('chalk')

module.exports = (message) => {
  if (config.shouldPrintDebugging) console.log(chalk.blue(message))
}
