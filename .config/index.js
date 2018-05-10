
const config = {
  printDebugging: true
}

const shouldPrintDebugging = (() => {
  return config.printDebugging === true
})()

module.exports = {
    shouldPrintDebugging
}