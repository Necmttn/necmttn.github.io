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
  padding: 10px 0;
  & a, a:visited {
    color: ${props => props.theme.dark};
    text-decoration: none;
    font-weight: 800;
  }
`

export default Header
