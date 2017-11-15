import React from 'react'
import PropTypes from 'prop-types'

import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import theme from '../themes/dark'
import {IntlProvider} from 'react-intl'

import {
  getLangs,
  getUrlForLang,
  getCurrentLangKey,
  isHomePage
} from 'ptz-i18n'


const baseStyles = () => injectGlobal`
  ${reset}
  // if you have another global style add here.
`

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

  baseStyles() //init reset.css
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
