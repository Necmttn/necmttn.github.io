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
  font-family: ${props => props.theme.fontFamily};
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  min-height: 100vh;
  overflow-x: hidden;
  color: ${props => props.theme.color};
`

export default class Wrapper extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      darkMode: false
    }
  }

  changeTheme() {
    const pref = this.getPref()
    const temp = {
      darkMode: !pref.darkMode
    }
    this.setState(temp)
    this.setPref(temp)
  }

  setDefaultPref() {
    const defaultPref = {
      darkMode: false
    }
    this.setPref(defaultPref)
  }
  getPref() {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('pref'))
    }
    return {
      darkMode: false
    }
  }

  setPref(jsObject) {
    if (typeof window !== 'undefined') {
      return localStorage.setItem('pref', JSON.stringify(jsObject))
    }
  }

  componentWillMount() {
    const pref = this.getPref()
    if(pref === null) {
      this.setDefaultPref()
    }

    baseStyles() //  Reset CSS
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
    const pref = this.getPref()
    const siteTheme = (pref.darkMode) ? Dark : Light;

    return (
      <ThemeProvider theme={siteTheme}>
        <IntlProvider
          locale={langKey}
          messages={this.props.i18nMessages}>
          <Background>
            <Menu
              menu={menu}
              isHome={isHome}
              langKey={langKey}/>
            <LangNav
              langs={langsMenu}
              homeLink={homeLink}
              url={url}
              menu={menu}
              theme={pref.darkMode}
              changeTheme={() => this.changeTheme()}
              isHome={isHome}/>
            {children()}
          </Background>
        </IntlProvider>
      </ThemeProvider>
    )
  }
}
