const fuzzy = require('fuzzy')
const low = require('lowdb')
const lodashId = require('lodash-id')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./data/db.json')
const db = low(adapter)

db._.mixin(lodashId)

const defaultDatabase = {
  categories: [],
  langs: ['en', 'zh', 'tr'],
  tags: [],
  authors: [
    {
      "id": "Necmettin Karakaya",
      "bio": "JavaScript Developer with ♥ ",
      "avatar": "avatars/neco.jpg",
      "twitter": "@necmttn",
      "github": "@necmttn",
      "instagram": "necmettinkarakaya",
      "email": "necmettin.karakaya@gmail.com"
    }
  ]
}


// initilize defaultDatabase
db.defaults(defaultDatabase)
  .write()

class Store {
  static addTag(name) {
    db.get('tags')
      .push({name: name})
      .write()
  }

  static getTags(answers, input = '') {
    const tags = db.get('tags')
      .map('name')
      .value()
    return new Promise(function(resolve) {
      const fuzzyResult = fuzzy.filter(input, tags)
      resolve(fuzzyResult.map((el) => el.original))
    })
  }

  static addCategories(name) {
    db.get('categories')
      .push({name: name})
      .write()
  }

  static addLang(key) {
    db.get('langs')
      .push(key)
      .write()
  }
}





module.exports = {
  Store
}
