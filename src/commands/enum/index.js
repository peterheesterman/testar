

const producePossibleInputs = require('../../enumerator')
const writer = require('../../writer')

module.exports = (spec_file, functionHandles) => {

  let newTestCode = functionHandles.map(producePossibleInputs);

  console.log(newTestCode)
  if (newTestCode) { console.log('There is new test code')}

  writer(spec_file, newTestCode.join('\n'))
}
