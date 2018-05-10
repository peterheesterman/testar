

const is = (type) => (node) => {
  return node.type === type
}

module.exports = {
  isVariableDeclaration: is("VariableDeclaration"),
  isAssignmentExpression: is("AssignmentExpression"),
  isExpressionStatement: is("ExpressionStatement"),
  isMemberExpression: is("MemberExpression"),
  isVariableDeclarator: is("VariableDeclarator"),

  isIdentifier: is("Identifier"),

  // Functions
  isFunctionDeclaration: is("FunctionDeclaration"),
  isArrowFunctionExpression: is("ArrowFunctionExpression"),
}