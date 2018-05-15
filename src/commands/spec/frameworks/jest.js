
const { indexer } = require('./tools')

module.exports = (filePath) => {
  const { functionName, importPath } = indexer(filePath)

  return `
/* @flow */

const ${functionName} = require('${importPath}')

test('[describe a behaviour]', () => {

  expect(${functionName}()).toBe(undefined)
})

`
}