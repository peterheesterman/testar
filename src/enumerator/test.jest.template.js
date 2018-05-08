module.exports = ({
  testName,
  functionName,
}) => `
test('${testName}', () => {
  expext(${functionName}()).toBe(undefined)
}
`
