
const path = require('path')

const indexer = (filePath) => {
  let indexFile = "index"
  let fileName = path.basename(filePath, '.js')
  let folderName = path.basename(path.dirname(filePath))
  
  let functionName = folderName;
  let importPath = `./${indexFile}`

  if (fileName !== indexFile) {
    functionName = fileName;
    importPath = `./${fileName}`
  } 

  return {
    functionName,
    importPath
  }
}

module.exports = {
  indexer
}