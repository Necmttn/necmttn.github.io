import React from 'react'
import PropTypes from 'prop-types'

import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import LangNav from '../components/LangNav'
import reset from 'styled-reset'
import darkTheme from '../themes/dark'
import lightTheme from '../themes/light'
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
  color: #222222;
`

export default class Wrapper extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      nightMode: true
    }
  }

  changeTheme() {
    console.log('change theme')
    this.setState({
      nightMode: !this.state.nightMode
    })
  }

  render() {
    const { children, location } = this.props
    const url = location.pathname;
    const isHome = isHomePage(url)

    const {langs, defaultLangKey} = this.props.data.site.siteMetadata.languages;
    const langKey = getCurrentLangKey(langs, defaultLangKey, url);

    const homeLink = `${langKey}`
    const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url))
    console.log(getUrlForLang(homeLink, url))
    const {menu, author, sourceCodeLink} = this.props.data.site.siteMetadata;
    const siteTheme = (this.state.nightMode) ? darkTheme : lightTheme;
    return (
      <ThemeProvider theme={siteTheme}>
        <IntlProvider
          locale={langKey}
          messages={this.props.i18nMessages}>
          <Background>
            <LangNav
              langs={langsMenu}
              homeLink={homeLink}
              url={url}
              menu={menu}
              theme={this.state.nightMode}
              changeTheme={() => this.changeTheme()}
              isHome={isHome}/>
            {children()}
          </Background>
        </IntlProvider>
      </ThemeProvider>
    )
  }
}
