import React from 'react'
// import { Menu } from 'necmttn-component'
import { stack as Menu } from 'react-burger-menu'
import Link from 'gatsby-link'


var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#FFF'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#fff'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}


const MenuItem = ({children}) => (
  <div>
      {children}
  </div>
)

const Logo = ({langKey}) => {
  render() {
    <Link to={`/${langKey}/`}>
      <MenuItem>
        @Necmttn
      </MenuItem>
    </Link>
  }
}

const bi

class MainMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    const { children, location, menu, langKey, isHome } = this.props
    return (
      <div id="outer-container">
        <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } styles={ styles }>
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
          <Link to={`/${langKey}/photography/`}>
            <MenuItem>
              Photography
            </MenuItem>
          </Link>
          <a href="mailto:necmettin.karakaya@gmail.com">
            <MenuItem>
              Email
            </MenuItem>
          </a>
        </Menu>
        <main id="page-wrap">
          {children}
        </main>
      </div>
    );
  }
}

export default MainMenu
