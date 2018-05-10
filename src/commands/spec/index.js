

const producePossibleInputs = require('../../enumerator')
const writer = require('../../writer')


const getSpecFilePath = require('../../utils/getSpecFilePath')

module.exports = (sourceFile) => {

// Make this configurable some time

// Ava
  let newTestCode = `
/* @flow */

const test = require('ava')

test('[describe a behaviour]', (t) => {

  t.fail()
})

`


// // Jest
//   let newTestCode = `
// /* @flow */

// const something = require('something')

// test('[describe a behaviour]', () => {

//   expect(something()).toBe(undefined)
// })

// `

  writer(getSpecFilePath(sourceFile), newTestCode)
}
