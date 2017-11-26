const autocomplete = require('inquirer-autocomplete-prompt')
const tilGenerator = require('./til-generator')
const categoryGenerator = require('./category-generator')
const tagGenerator = require('./tag-generator')
const editAction = require('./edit-action')

module.exports = plop => {
  plop.setWelcomeMessage('[CUSTOM]'.yellow + ' What can I do for you?');
  plop.setPrompt('autocomplete', autocomplete)
  plop.setActionType('edit', editAction)
  // plop.load('./component-generator.js');
  // plop.load('./blog-post-generator.js');
  plop.setGenerator('@Tag', tagGenerator)
  plop.setGenerator('&Category', categoryGenerator)
  plop.setGenerator('#TIL', tilGenerator)
};



