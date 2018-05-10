
module.exports = {  
  type: 'list',
  name: 'framework',
  message: 'What test framework are you using?',
  choices: ['Jest', 'Ava'],
  filter: function(val) {
    return val.toLowerCase()
  }
}