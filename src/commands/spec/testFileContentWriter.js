
const jestTestWriter = require('./frameworks/jest')
const avaTestWriter = require('./frameworks/ava')

const testFileContentWriter = ({
  framework, // string {'jest', 'ava:default'}
  filePath
}) => {

  let testCode = avaTestWriter(filePath)

  if (framework === "jest") {
    testCode = jestTestWriter(filePath)
  }

  return testCode
}

module.exports = testFileContentWriter