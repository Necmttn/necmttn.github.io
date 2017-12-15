import React from 'react'
import styled from 'styled-components'

const Header = ({children}) => (
  <Wrapper>
    {children}
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  padding: 10px;
`

export default Header
