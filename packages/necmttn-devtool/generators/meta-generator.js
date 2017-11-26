const { Store } = require('../db')

module.exports = plop => {
  plop.setGenerator('tag & category', {
    prompts: [
      {
        type: 'autocomplete',
        name: 'tags',
        message: 'tags?',
        source: Store.getTags,
        suggestOnly: true
      },
    ]
  })
}

