import React from 'react'
import styled from 'styled-components'

const Header = ({children, LinkComp, to}) => (
  <Wrapper>
    <LinkComp to={to}>{children}</LinkComp>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  & h1 {
    color: ${props => props.theme.dark};
    text-decoration: none;
    font-weight: 800;
  }
`

export default Header
