import React from 'react'
import PropTypes from 'prop-types'
import { addLocaleData } from 'react-intl'
import Layout from './_layout'

import messages from '../i18n/zh'
import zh from 'react-intl/locale-data/zh'

addLocaleData(zh)

export default (props) => (
	<Layout
		{...props}
		i18nMessages={messages} />
)

export const pageQuery = graphql`
  query LayoutZh {
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
        menu {
          label
          slug
          link
          items {
            label
            slug
          }
        }
      }
    }
  }
`


