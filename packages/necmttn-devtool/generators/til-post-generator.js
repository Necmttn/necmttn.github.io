const fs = require('fs');
const {inputRequired} = require('../utils');
const { authors, tags, categories } = JSON.parse(fs.readFileSync('./data/db.json'))
console.log(authors, tags, categories)
const { Store } = require('../db')
module.exports = plop => {
  plop.setGenerator('TIL post', {
    prompts: [
      {
        type: 'input',
        name: 'title',
        message: 'TIL post title?',
        validate: inputRequired('title')
      },
      {
        type: 'list',
        name: 'author',
        message: 'The author of blog post?',
        choices: authors.map(author => ({name: author.id, value: author.id}))
      },
      {
        type: 'list',
        name: 'tags',
        message: 'tags ?',
        choices: tags.map(tag => ({name: tag.name, value: tag.slug}))
      },
      {
        type: 'confirm',
        name: 'addTag',
        message: 'Do you wanna add more ?'
      },
      {
        when: function (re)
        type: 'autocomplete',
        name: 'tags',
        message: 'tags?',
        source: Store.getTags,
        suggestOnly: true
      },
      {
        type: 'list',
        name: 'category',
        message: 'Category ?',
        choices: categories.map(category => ({name: category.name, value: category.slug}))
      },
      {
        type: 'confirm',
        name: 'draft',
        message: 'It\'s a draft?'
      }
    ],
    actions: data => {
      // Get current date
      data.createdDate = new Date().toISOString().split('T')[0];

      console.log(data.tags)
      // Parse tags as yaml array
      // if (data.tags) {
      //   data.tags = `\ntags:\n  - ${data.tags.join('\n  - ')}`;
      // }

      return [
        {
          type: 'add',
          path: `../../src/pages/blog/{{dashCase category}}/{{dashCase title}}/index.md`,
          templateFile: '../templates/blog-post-md.template'
        }
      ];
    }
  });
};
