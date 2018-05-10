
const testTemplate = require('./test.jest.template')

module.exports = (functionHandle) => {
  if (!functionHandle) throw new Error('the functionHandle is undefined or null')
  const functionName = 'fakeName';

  return testTemplate({
    testName: `${functionName} should XXX`,
    functionName
  })
}
