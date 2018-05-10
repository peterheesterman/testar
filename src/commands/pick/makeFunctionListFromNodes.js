

const {
  isFunctionDeclaration,
  isArrowFunctionExpression
} = require('./nodeTypeCheckers')

const {
  getFunctionNameFromFunctionDeclarationNode,
  getArrowFunctionExpressionParamaterSet
} = require('./functionUtils')

module.exports = (nodes) => {

  // Put the Anonymous functions at the bottom of the list
  nodes.sort((a, b) => {
    return a.type < b.type
  })

  return nodes.map(node => {
    if (isFunctionDeclaration(node)) {
      return getFunctionNameFromFunctionDeclarationNode(node)
    } else if (isArrowFunctionExpression(node)) {
      return getArrowFunctionExpressionParamaterSet(node)
    } else {
      return "???"
    }
  })
}

  