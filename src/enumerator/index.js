
const testTemplate = require('./test.jest.template')

const inputDefinitions = require('./inputDefinitions')

const testMaker = (functionName) => (typeDefinition) => {
  return testTemplate({
    testName: `${functionName} should XXX with input (${typeDefinition.name})`,
    functionName,
    inputString: typeDefinition.literal
  })
}

module.exports = (
  functionName
) => {
  if (!functionName) throw new Error('the functionName is undefined or null')

  const tests = inputDefinitions.map(testMaker(functionName))

  return tests.join('')
}
