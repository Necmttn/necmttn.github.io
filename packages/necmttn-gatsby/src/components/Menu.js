import React from 'react'
import { Menu } from 'necmttn-component'
import Link from 'gatsby-link'

const MainMenu = ({menu}) => {
  return (
    <Menu>
      <Link to="/blog">
        <Menu.Item>
          Journal
        </Menu.Item>
      </Link>
      <Link>
        <Menu.Item>
          #TIL
        </Menu.Item>
      </Link>
      <Link>
        <Menu.Item>
          About
        </Menu.Item>
      </Link>
      <Link>
        <Menu.Item>
          Contact
        </Menu.Item>
      </Link>
    </Menu>
  )
}


export default MainMenu 
