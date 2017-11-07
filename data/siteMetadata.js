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
  menu: [
    {label: 'home', slug: '/'},
    {label: 'posts', slug: '/blog/'},
    {label: 'tags', slug: '/tags/'},
    {label: 'about', slug: '/about/'},
    {
      label: 'resume', 
      slug: '/resume/',
      items: [
        {label: 'resume.technologies', slug: '/resume/technologies/'},
        {label: 'resume.jobsAndClients', slug: '/resume/jobsAndClients/'},
        {label: 'resume.educations', slug: '/resume/education'},
        {label: 'resume.languages', slug: '/resume/languages'}
      ]
    },
    {label: 'sourceCode', link: 'https://github.com/necmttn/necmttn.github.io'},
    {label: 'contact', slug: '/contact/'}
  ],
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
