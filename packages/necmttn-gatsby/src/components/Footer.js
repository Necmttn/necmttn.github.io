import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { Menu } from 'necmttn-component'

const MenuItem = Menu.Item

const Footer = ({langKey}) => {
  return (
    <FooterWrapper>
      <div className="menu">
        <Link to={`/${langKey}/blog/`}>
          Journal
        </Link>
        <Link to={`/${langKey}/til/`}>
          #TIL
        </Link>
        <a href="https://www.instagram.com/necmettinkarakaya/" target="_blank">
          Photography
        </a>
        <a href="mailto:necmettin.karakaya@gmail.com">
          Email
        </a>
      </div>
      <div className="social">
        
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  position: relative;
  padding: 2em 10vw;
  border-top: 1px solid rgba(0,0,0, 0.4);
  display: flex;
  flex-flow: row wrap;
  min-height: 100px;
  .menu {
    flex: 3;
  }
  .social {
    flex: 1;
  }
`

export default Footer
