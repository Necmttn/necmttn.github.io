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
  a {
    color: ${props => props.theme.card.colors.header};
    text-decoration: none;
    font-weight: 800;
    font-size: 1.8rem;
    &:hover {
      color: ${props => props.theme.card.colors.headerHover};
    }
  }
`

export default Header
