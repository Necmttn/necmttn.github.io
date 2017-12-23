const languages = require('./languages')

module.exports = {
  siteUrl: 'https://necmttn.com',
  title: 'Necmttn',
  author: {
    name: 'Necmettin Karakaya',
    homeCity: 'Antalya',
    email: 'necmettin.karakaya@gmail.com',
    defaultLink: 'https://github.com/necmttn'
  },
  sourceCodeLink: 'https://github.com/necmttn/necmttn.github.io',
  languages,
  // resume,
  contact: [
    {
      type: 'email',
      value: 'necmettin.karakaya@gmail.com',
      link: 'mailto:necmettin.karakaya@gmail.com'
    },
    {
      type: 'phone',
      value: '+86 186 6452 1850',
      country: 'ch',
      link: 'tel:(+86) 18664521850'
    }
  ]
};
