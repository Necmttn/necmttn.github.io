import React from 'react'
import styled from 'styled-components'
import MenuItem from './MenuItem'

export default class Menu extends React.Component {
  static Item = MenuItem
  render() {
    const {
      children
    } = this.props
    return (
      <MenuWrapper>
        {children}
      </MenuWrapper>
    )
  }
}

const MenuWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
`


