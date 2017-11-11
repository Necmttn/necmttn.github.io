import React from 'react'
import PropTypes from 'prop-types'

import styled, { ThemeProvider } from 'styled-components'
import theme from '../themes/dark'
import {IntlProvider} from 'react-intl'

import {
  getLangs,
  getUrlForLang,
  getCurrentLangKey,
  isHomePage
} from 'ptz-i18n'

const Background = styled.div`
  background-color: ${props => props.theme.bg};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  min-height: 100%;
  overflow-x: hidden;
`

const Wrapper = (props) => {
  const { children, location } = props;
  const url = location.pathname;
  const isHome = isHomePage(url)

  const {langs, defaultLangKey} = props.data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);

  const homeLink = `${langKey}`
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url))

  const {menu, author, sourceCodeLink} = props.data.site.siteMetadata;

  console.log(langKey)
  console.log(props.i18nMessages)
  return (
    <ThemeProvider theme={theme}>
      <IntlProvider
        locale={langKey}
        messages={props.i18nMessages}>
        <Background>
          {children()}
        </Background>
      </IntlProvider>
    </ThemeProvider>
  )
}


export default Wrapper
