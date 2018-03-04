import React, { Component } from 'react'
import styled from 'styled-components'

class ToolBox extends Component {
  render() {
    return (
      <Wrapper>
        <Header>#ToolBox</Header>
      </Wrapper>
    )
  }
}

const Wrapper = styled.section`
  height: 100vh;
`

const Header = styled.h1`
  font-size: 16em;
  margin-top: 10vh;
  margin-left: 4vw;
`
export default ToolBox
