const { Store } = require('../db')
const { generateSlug } = require('../utils')

module.exports = plop => {
  plop.setGenerator('Tag', {
    prompts: [
      {
        type: 'autocomplete',
        name: 'tag',
        message: 'how should it call',
        source: Store.getTags,
        suggestOnly: true,
        validate: (val) => {
          if (val) {
            // check is this exist or not before
            const tempSlug = generateSlug(val)
            const isExist = Store.findElement('tags', {slug: tempSlug})
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
        const message = `adding ${data.tag}`
        Store.addTag(data.tag)
        return message
      }
    ]
  })
}

