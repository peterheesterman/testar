module.exports = ({
  testName,
  functionName,
  inputString
}) => `
test('${testName}', () => {
  expext(${functionName}(${inputString})).toBe(undefined)
}
`
