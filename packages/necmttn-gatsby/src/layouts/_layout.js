import React from 'react'
import PropTypes from 'prop-types'

import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import { Dark, Light, baseStyles } from 'necmttn-component'

import LangNav from '../components/LangNav'
import Menu from '../components/Menu'
import {IntlProvider} from 'react-intl'
require('necmttn-component/src/style/prism-darcula.css')

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

    const homeLink = `/${langKey}/`
    const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url))
    const {menu, author, sourceCodeLink} = this.props.data.site.siteMetadata;
    const siteTheme = (this.state.nightMode) ? Dark : Light;


    baseStyles() //  Reset CSS
    return (
      <ThemeProvider theme={siteTheme}>
        <IntlProvider
          locale={langKey}
          messages={this.props.i18nMessages}>
          <Background>
            <Menu
              menu={menu}
              langKey={langKey}/>
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
