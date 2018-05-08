
module.exports = (newFilePath) => ({
  type: 'confirm',
  name: 'shouldMakeNewFile',
  message: `You want to make a new test file ${newFilePath}?`
})