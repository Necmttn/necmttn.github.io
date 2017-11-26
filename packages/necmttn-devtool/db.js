const fuzzy = require('fuzzy')
const low = require('lowdb')
const lodashId = require('lodash-id')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./data/db.json')
const db = low(adapter)
const { generateSlug } = require('./utils')

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
  static findElement(table, query) {
    return db.get(table)
      .find(query)
      .value()
  }
  static addTag(name) {
    const slug =  generateSlug(name)
    db.get('tags')
      .insert({name: name, slug: slug})
      .write()
  }

  static getTags(answers, input) {
    input = input || ''
    const tags = db.get('tags')
      .map('name')
      .value()
    return new Promise(function(resolve) {
      const fuzzyResult = fuzzy.filter(input, tags)
      resolve(fuzzyResult.map((el) => el.original))
    })
  }

  static addCategory(name) {
    const slug = generateSlug(name)
    db.get('categories')
      .insert({name: name, slug: slug})
      .write()
  }

  static getCategories(answers, input) {
    input = input || ''
    const tags = db.get('categories')
      .map('name')
      .value()
    return new Promise(function(resolve) {
      const fuzzyResult = fuzzy.filter(input, tags)
      resolve(fuzzyResult.map((el) => el.original))
    })
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
