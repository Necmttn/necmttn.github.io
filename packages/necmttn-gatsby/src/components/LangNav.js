import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'


const LangNav = (props) => {
	console.log(props)
	const links = props.langs.map((lang) => {
		return (
      <WhiteLink key={lang.link} to={lang.link} Active={lang.selected}>{lang.langKey}</WhiteLink>
		)
	})
	 return (
    <Wrapper>
			{links}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
	text-decoration: none;
	color: white;
`

const WhiteLink = styled(Link)`
	text-decoration: none;
	color: ${props => (props.Active) ? 'red' : 'white'};
	margin-right: 10px;
	margin-left: 10px;
`
const Sep = styled.span`
	width: 10px;
	height: 10px;
	background: white;
	border-left: 1px solid white;
`

export default LangNav
