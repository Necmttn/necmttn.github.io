import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'


const LangNav = () => {
  return (
    <Wrapper>
        <Link to="/tr/">Turkce</Link>
        <Link to="/en/">English</Link>
        <Link to="/zh/">中文</Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
`

export default LangNav
