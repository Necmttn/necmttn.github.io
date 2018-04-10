import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
const FontAwesome = 'react-fontawesome'

const LangNav = (props) => {
  const links = props.langs.map((lang) => {
    const lanKeys = {
      tr: 'TR',
      en: 'EN',
      zh: '中文'
    }
    return (
      <Item key={lang.link} Active={lang.selected}>
        <WhiteLink key={lang.link} to={lang.link} >{lanKeys[lang.langKey]}</WhiteLink>
      </Item>
		)
  })
  const activeTheme = props.theme
	 return (
    <Wrapper>
      <LangContainer>
			  {links}
      </LangContainer>
      <ThemeContainer>
        <span onClick={() => props.changeTheme()}>
          {(props.theme) ? <span>😎</span> : <span>🌙</span>}
        </span>
      </ThemeContainer>
    </Wrapper>
  )
}


const WhiteLink = styled(Link)`
	text-decoration: none;
  padding: 0 5px;
`
const Item = styled.div`
  padding: 15px 5px;
  & a {
    color: ${props => (props.Active) ? '#006400' : 'white'};
    border-bottom: ${props => (props.Active) ? '3px solid #9dffc8' : 'none'};
  }
`

const LangContainer = styled.div`
  margin-bottom: 20px;
	text-decoration: none;
`

const ThemeContainer = styled.div`
  margin-bottom: 5px;
	text-decoration: none;
  padding: 3px;
  color: yellow;
  margin: 0 auto;
  font-size: 27px;
  }
`

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-flow:column nowrap;
  z-index: 10;
  background: ${props => props.theme.colors.firstDark};
  @media ${props => props.theme.mediaQuery.Small} {
    top: auto;
    left: auto;
    bottom: 0;
    right: 0;
  }
`

export default LangNav
