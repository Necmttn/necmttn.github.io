import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import invoke from 'lodash.invoke'

export default class Item extends React.Component {
  static propTypes = {
    /** Button can show it is currently the active user selection */
    active: PropTypes.bool,
    /** Button text color */
    color: PropTypes.string,
    /** Button children */
    children: PropTypes.node.isRequired,
    /** Disables functionalty of the button. */
    disabled: PropTypes.bool,
    /** Called after user's click
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClick: PropTypes.func
  }

  static defaultProps = {
    active: false,
    color: 'black',
    disabled: false,
  }

  handleClick = (e) => {
    const { disabled } = this.props

    if (disabled) {
      e.preventDefault()
      return
    }

    invoke(this.props, 'onClick', e, this.props)
  }

  render() {
    const {
      children,
      active,
      color
    } = this.props
    return (
      <ItemWrapper onClick={this.handleClick} active={active} color={color}>
        <h1>
          {children}
        </h1>
      </ItemWrapper>
    )
  }
}



const ItemWrapper = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  margin: 0 10px;
  justify-content: center;
  color: ${props => props.theme.colors.green}
`
