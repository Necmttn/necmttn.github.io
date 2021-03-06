// const { TRELLO } = require('secret');
const siteMetadata = require('./data/siteMetadata')

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: 'gatsby-source-trello',
    //   options: {
    //     teamId: 'necmttncom',
    //     apiKey: process.env.TRELLO_KEY,
    //     secret: process.env.TRELLO_SECRET
    //   }
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-image',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: 'en',
        useLangKeyLayout: true,
        markdownRemark: {
          postPage: 'src/templates/post.js',
          query: `
          {
              allMarkdownRemark {
                  edges {
                  node {
                      fields {
                        slug,
                        langKey
                      }
                  }
                  }
              }
          }
          `
        }
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-115374727-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
  ],
}
