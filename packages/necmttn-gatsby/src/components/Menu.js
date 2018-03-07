import React from 'react'
import { Menu as MenuBar } from 'necmttn-component'
import { stack as Menu } from 'react-burger-menu'
import Link from 'gatsby-link'
import styled from 'styled-components'


const StyleWrapper = styled.div`
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 36px;
    top: 36px;
    display: none;
    @media ${props => props.theme.mediaQuery.Small} {
      display: block;
    }
  }


  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: ${props => props.theme.menu.colors.bar};
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
    align-items: flex-start;
    display: flex;
    flex-flow: column;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`

const MenuItem = MenuBar.Item

const Logo = ({langKey, logo}) => {
  const LogoWrapper = styled(Link)`
    position: relative;
    img {
      width: 80px;
    }
  `

  return (
    <LogoWrapper to={`/${langKey}/`}>
      <img src={logo} />
    </LogoWrapper>
  )
}

class MainMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    const { children, location, menu, langKey, isHome, logo } = this.props
    return (
      <StyleWrapper>
        <div id="outer-container">
          <Menu right pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
            <Logo langKey={langKey} logo={logo}/>
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
          </Menu>
          <main id="page-wrap">
            <MenuBar>
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
              <Logo langKey={langKey} logo={logo}/>
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
            </MenuBar>
            {children}
          </main>
        </div>
      </StyleWrapper>
    );
  }
}

export default MainMenu
