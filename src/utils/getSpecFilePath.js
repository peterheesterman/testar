
module.exports = (filePath) => {
  const indexOfLastDot = filePath.lastIndexOf('.');
  return filePath.slice(0, indexOfLastDot) + ".spec" + filePath.slice(indexOfLastDot);
}
