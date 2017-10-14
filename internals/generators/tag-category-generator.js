const fs = require('fs');

const { tags, categories } = JSON.parse(fs.readFileSync('./data/tags-categories.json'));

module.exports = plop => {
  plop.setGenerator('tag & category', {
    // prompts: [
    //   {
    //     type: '
    // ]
  }

}

