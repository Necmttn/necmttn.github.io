import React from 'react'
import styled from 'styled-components'

const Header = ({children, LinkComp, to}) => (
  <Wrapper>
    <LinkComp to={to}><h1>{children}</h1></LinkComp>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  padding: 10px;
  & h1 {
    color: white;
    text-decoration: none;
    font-weight: 800;
  }
`

export default Header
