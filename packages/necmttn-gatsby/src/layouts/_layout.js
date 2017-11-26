import React from 'react'
import PropTypes from 'prop-types'

import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import LangNav from '../components/LangNav'
import reset from 'styled-reset'
import theme from '../themes/dark'
import {IntlProvider} from 'react-intl'
require('../themes/prism-darcula.css')

import {
  getLangs,
  getUrlForLang,
  getCurrentLangKey,
  isHomePage
} from 'ptz-i18n'


const baseStyles = () => injectGlobal`
  ${reset}
  // if you have another global style add here.

  h1 {
    font-size: 2.0rem;
    line-height: 2.4rem;
    padding-bottom: 0.1rem;
  }

  h2 {
    font-size: 1.8rem;
    line-height: 1.6rem;
  }

  h3 {
    font-size: 1.6rem;
    line-height: 1.6rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6rem;
  }
`

const Background = styled.div`
  background-color: ${props => props.theme.bg};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  min-height: 100%;
  overflow-x: hidden;
  color: white;
`

const Wrapper = (props) => {
  const { children, location } = props;
  const url = location.pathname;
  const isHome = isHomePage(url)

  const {langs, defaultLangKey} = props.data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);

  const homeLink = `/${langKey}/`

  console.log(langs, langKey, homeLink, url)
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url))

  const {menu, author, sourceCodeLink} = props.data.site.siteMetadata;

  baseStyles() //init reset.css
  return (
    <ThemeProvider theme={theme}>
      <IntlProvider
        locale={langKey}
        messages={props.i18nMessages}>
        <Background>
          <LangNav
						langs={langsMenu}
						homeLink={homeLink}
						url={url}
						menu={menu}
						isHome={isHome}/>
					{children()}
        </Background>
      </IntlProvider>
    </ThemeProvider>
  )
}


export default Wrapper
