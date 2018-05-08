
const fs = require('fs')
const path = require('path')

module.exports = (file) => {
  const filePath = path.join(process.cwd(), file)

  if (fs.existsSync(filePath)) {
    const indexOfLastDot = filePath.lastIndexOf('.');
    const specFilePath = filePath.slice(0, indexOfLastDot) + ".spec" + filePath.slice(indexOfLastDot);

    if(specFilePath) { console.log('This is coming soon...')}
  } 
}