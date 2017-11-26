const autocomplete = require('inquirer-autocomplete-prompt')

module.exports = plop => {
  plop.setWelcomeMessage('[CUSTOM]'.yellow + ' What can I do for you?');
  plop.setPrompt('autocomplete', autocomplete)
  // plop.load('./component-generator.js');
  // plop.load('./blog-post-generator.js');
  plop.load('./tag-generator.js');
  plop.load('./til-post-generator.js');
};



