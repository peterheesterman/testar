

const {
  isVariableDeclaration,
  isExpressionStatement,
  isAssignmentExpression,
  isMemberExpression,
  isVariableDeclarator,
  isIdentifier,

  // functions
  isArrowFunctionExpression,
  isFunctionDeclaration,
} = require('./nodeTypeCheckers') 

const recurseArr = (arr) => {
  return arr.reduce((acc, node) => {
    let newNodes = recurse(node)
    return newNodes.length > 0 ? acc.concat(newNodes) : acc
  }, [])
}

const recurse = (node) => {
  let nodes = [];

  if (isVariableDeclaration(node)) {
    nodes = [node].concat(recurseArr(node.declarations))
  } 
  
  else if (isAssignmentExpression(node)) {
    nodes = [node].concat(recurse(node.left)).concat(recurse(node.right))
  } 
  
  else if (isExpressionStatement(node))  {
    nodes = [node].concat(recurse(node.expression))
  }
  
  else if (isVariableDeclarator(node)) {
    nodes = [node].concat(recurse(node.init))
  }
  
  // nodes i need to traverse generically for depth
  else if (isMemberExpression(node) || isIdentifier(node))  {
    nodes = [node]
  }


  // functions -------

  else if (isArrowFunctionExpression(node))  {
    // Add a number to figure out which identifiers go together
    nodes = [node].concat(recurseArr(node.params).map(identifier => Object.assign(identifier,{functionPosition: node.start})))
  }
  
  else if (isFunctionDeclaration(node))  {
    nodes = [node]
  }

  // -------------------


  // Catch all for debugging
  if (nodes.length === 0) {
    // Used to figure out nodes that are not added to the array but are observed
    //console.log(`---- ${node.type} ----`)
  }

  return nodes 
}


module.exports = (ast) => {
  const nodes = recurseArr(ast.program.body);
  // can print nodes here if needed to add depth in the future - just a prototype atm.
  //console.log(nodes)
  //console.log(nodes.length)
  //return nodes.filter(node => isArrowFunctionExpression(node) || isFunctionDeclaration(node) || isIdentifier(node) ? true : false)
  return nodes.filter(node => isArrowFunctionExpression(node) || isFunctionDeclaration(node) ? true : false)
}
