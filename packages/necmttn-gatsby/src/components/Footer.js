import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { Menu } from 'necmttn-component'
import * as t from '../i18n'

const MenuItem = Menu.Item

const Footer = ({langKey}) => {
  const socialIconSize = "fa-2x"
  return (
    <FooterWrapper>
      <div className="menu">
        <Link to={`/${langKey}/`}>
          {t.Homepage}
        </Link>
        <Link to={`/${langKey}/blog/`}>
          {t.Journal}
        </Link>
        <Link to={`/${langKey}/til/`}>
          {t.TIL}
        </Link>
        <a href="https://www.instagram.com/necmettinkarakaya/" target="_blank">
          {t.Photography}
        </a>
        <a href="mailto:necmettin.karakaya@gmail.com">
          {t.Email}
        </a>
      </div>
      <div className="social">
        <div className="quote">
          {t.smoothSea} <br />
          — Franklin D. Roosevelt
        </div>
        <div className="wrapper">
          {/*<a href="https://www.facebook.com/necmettin.karakaya">
            <i className={`fab ${socialIconSize} fa-facebook-square`}></i>
          </a>
          */}
          <a href="https://github.com/necmttn">
           <i className={`fab ${socialIconSize} fa-github`}></i>
          </a>
          <a href="https://twitter.com/necmttn">
           <i className={`fab ${socialIconSize} fa-twitter-square`}></i>
          </a>
          <a href="https://www.instagram.com/necmettinkarakaya/">
           <i className={`fab ${socialIconSize} fa-instagram`}></i>
          </a>
          <a href="https://www.youtube.com/channel/UCji5hBgFrxwwQKjEFrcaFeg">
            <i className={`fab ${socialIconSize} fa-youtube`}></i>
          </a>
        </div>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  position: relative;
  padding: 5em 10vw;
  border-top: 1px solid rgba(0,0,0, 0.2);
  display: flex;
  flex-flow: row wrap;
  min-height: 100px;
  .menu {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto;
    grid-column-gap: 0;
    grid-row-gap: 20px;
    justify-items: stretch;
    align-items: stretch;
    width: 400px;
    a {
      text-decoration: none;
      display: block;
      text-align: left;
      font-weight: 700;
      font: 600 12px Open Sans,sans-serif;
      color: ${props => props.theme.footer.menuLink};
      opacity: .6;
      &:hover {
        opacity: 1;
      }
    }
    @media ${props => props.theme.mediaQuery.Small} {
      display: none;
    }
  }
  .social {
    flex: 1;
    padding: 0 20px;
    max-width: 380px;
    margin-left: auto;
    @media ${props => props.theme.mediaQuery.Small} {
      margin-left: auto;
      margin-right: auto;
    }
    .quote {
      font: 14px/28px Open Sans,sans-serif;
      margin-bottom: 10px;
      text-align: center;
      color: ${props => props.theme.footer.quote}
    }
    .wrapper {
      display: flex;
      justify-content: space-between;
      a {
        text-decoration: none;
        color: ${props => props.theme.footer.socialIcon};
        opacity: .4;
        margin: 0 10px 0 0;
        &:hover {
          opacity: .9;
        }
      }
    }
  }
`

export default Footer
