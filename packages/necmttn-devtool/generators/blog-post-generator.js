const fs = require('fs');
const {inputRequired} = require('../utils');

const authors = JSON.parse(fs.readFileSync('./data/author.json'));
const { tags, categories} = JSON.parse(fs.readFileSync('./data/tags-categories.json'));

module.exports = plop => {
  plop.setGenerator('blog post', {
    prompts: [
      {
        type: 'input',
        name: 'title',
        message: 'Blog post title?',
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
        message: 'tags? (separate with coma)',
        choices: tags.map(tag => ({name: tag.name, value: tag.slug}))
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

      // Parse tags as yaml array
      if (data.tags) {
        data.tags = `\ntags:\n  - ${data.tags.join('\n  - ')}`;
      }

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
