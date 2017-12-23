import React from 'react'
import PropTypes from 'prop-types'

import Layout from './_layout'

import messages from '../i18n/en'

export default (props) => (
	<Layout
		{...props}
		i18nMessages={messages} />
)


export const pageQuery = graphql`
  query Layout {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
        siteUrl
        title
        sourceCodeLink
        author {
          name
          homeCity
          email
          defaultLink
        }
      }
    }
  }
`

