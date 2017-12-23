import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'


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
        <span>
          {props.theme}
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
  background: ${props => props.theme.colors.firstDark}
`

const ThemeContainer = styled.div`
  margin-bottom: 20px;
	text-decoration: none;
  background: ${props => props.theme.colors.blue}
`

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-flow:column nowrap;
`

export default LangNav
