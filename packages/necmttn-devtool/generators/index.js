const autocomplete = require('inquirer-autocomplete-prompt')

module.exports = plop => {
  plop.setPrompt('autocomplete', autocomplete)
  // plop.load('./component-generator.js');
  // plop.load('./page-generator.js');
  // plop.load('./blog-post-generator.js');
  plop.load('./til-post-generator.js');
};



