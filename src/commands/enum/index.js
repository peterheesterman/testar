

const producePossibleInputs = require('../../enumerator')
const writer = require('../../writer')

module.exports = (sourceFile, functionHandles) => {
  let newTestCode = functionHandles.map(producePossibleInputs);

  console.log(newTestCode)
  if (newTestCode) { console.log('There is new test code')}

  writer(sourceFile, newTestCode.join('\n'))
}
