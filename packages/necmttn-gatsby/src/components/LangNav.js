import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'


const LangNav = () => {
  return (
    <Wrapper>
        <WhiteLink to="/tr/">TR</WhiteLink>
				<Sep />
        <WhiteLink to="/en/">ENG</WhiteLink>
				<Sep />
        <WhiteLink to="/zh/">中文</WhiteLink>
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
	color: white;
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
