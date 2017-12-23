import React from 'react'
import PropTypes from 'prop-types'
import { addLocaleData } from 'react-intl'
import Layout from './_layout'

import messages from '../i18n/en'
import en from 'react-intl/locale-data/tr'

addLocaleData(en)

export default (props) => (
	<Layout
		{...props}
		i18nMessages={messages} />
)


export const pageQuery = graphql`
  query LayoutEn {
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

