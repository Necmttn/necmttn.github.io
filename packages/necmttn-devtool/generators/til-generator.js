const fs = require('fs');
const {inputRequired} = require('../utils');
const { authors, tags, categories } = JSON.parse(fs.readFileSync('./data/db.json'))
const { Store } = require('../db')
const { PAGES_DIR } = require('../utils/constants')

module.exports = {
  description: 'Today I learner micro post',
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
      type: 'checkbox',
      name: 'tags',
      message: 'tags ?',
      choices: tags.map(tag => ({name: tag.name, value: tag.slug}))
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
    // Parse tags as yaml array
    if (data.tags) {
      data.tags = `\ntags:\n  - ${data.tags.join('\n  - ')}`;
    }
    return [
      {
        type: 'add',
        path: `${PAGES_DIR}/til/{{dashCase title}}/index.en.md`,
        templateFile: '../templates/til-post-en-md.template'
      },
      {
        type: 'add',
        path: `${PAGES_DIR}/til/{{dashCase title}}/index.tr.md`,
        templateFile: '../templates/til-post-tr-md.template'
      },
      {
        type: 'add',
        path: `${PAGES_DIR}/til/{{dashCase title}}/index.zh.md`,
        templateFile: '../templates/til-post-zh-md.template'
      }
    ];
  }
};
