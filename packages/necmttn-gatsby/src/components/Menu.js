import React from 'react'
import { Menu } from 'necmttn-component'
import Link from 'gatsby-link'

const MainMenu = ({menu, langKey, isHome}) => {
  return (
    <Menu>
      <Link to={`/${langKey}/blog/`}>
        <Menu.Item>
          Journal
        </Menu.Item>
      </Link>
      <Link to={`/${langKey}/til/`}>
        <Menu.Item>
          #TIL
        </Menu.Item>
      </Link>
      { (isHome)? '' :
        <Link to={`/${langKey}/`}>
          <Menu.Item>
            @Necmttn
          </Menu.Item>
        </Link>
      }
      <Link to={`/${langKey}/photography/`}>
        <Menu.Item>
          Photography
        </Menu.Item>
      </Link>
      <a href="mailto:necmettin.karakaya@gmail.com">
        <Menu.Item>
          Email
        </Menu.Item>
      </a>
    </Menu>
  )
}


export default MainMenu
