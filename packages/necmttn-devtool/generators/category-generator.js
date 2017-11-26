const { Store } = require('../db')
const { generateSlug } = require('../utils')

module.exports = {
  description: 'Add a category',

  prompts: [
    {
      type: 'autocomplete',
      name: 'category',
      message: 'how should i call it ?',
      source: Store.getCategories,
      suggestOnly: true,
      validate: (val) => {
        if (val) {
          // check is this exist or not before
          const tempSlug = generateSlug(val)
          const isExist = Store.findElement('categories', {slug: tempSlug})
          if (isExist !== undefined) {
            return 'Already Exist'
          } else {
            return true
          }
        } else {
          return 'Type Something'
        }
      }
    },
  ],

  actions: [
    (data) => {
      const message = `adding ${data.category}`
      Store.addCategory(data.category)
      return message
    }
  ]
}

