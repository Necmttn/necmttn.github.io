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
          <MenuItem>
            Journal
          </MenuItem>
        </Link>
        <Link to={`/${langKey}/til/`}>
          <MenuItem>
            #TIL
          </MenuItem>
        </Link>
        <a href="https://www.instagram.com/necmettinkarakaya/" target="_blank">
          <MenuItem>
            Photography
          </MenuItem>
        </a>
        <a href="mailto:necmettin.karakaya@gmail.com">
          <MenuItem>
            Email
          </MenuItem>
        </a>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  position: relative;
  padding: 2em 10vw;
`

export default Footer
