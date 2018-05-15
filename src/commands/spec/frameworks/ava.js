
const { indexer } = require('./tools')

module.exports = (filePath) => {
  const { functionName, importPath } = indexer(filePath)

  return `
/* @flow */

const test = require('ava')

const ${functionName} = require('${importPath}')

test('[describe a behaviour]', (t) => {

  ${functionName}()

  t.fail()
})

`
}