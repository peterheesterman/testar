// This is a place to dump some function utils

const getFunctionNameFromFunctionDeclarationNode = (node) => {
  return `${node.id.name}(${(node.params.map(p => p.name).join(', '))})`;
}

const getArrowFunctionExpressionParamaterSet = (declaration) => {
  return `Anonymous function: (${declaration.params.map(p => p.name).join(', ')}) => {...}`;
}

module.exports = {
  getFunctionNameFromFunctionDeclarationNode,
  getArrowFunctionExpressionParamaterSet
}