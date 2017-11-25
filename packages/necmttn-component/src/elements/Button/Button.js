import React from 'react'
import styled from 'styled-components'
import ButtonContent from './ButtonContent'
import PropTypes from 'prop-types'
import invoke from 'lodash.invoke'

export default class Button extends React.Component {
  static Content = ButtonContent

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
      active,
      color,
      children
    } = this.props
    return (
      <ButtonWrapper onClick={this.handleClick} active={active} color={color}>
        {children}
      </ButtonWrapper>
    )
  }
}


const ButtonWrapper = styled.button`
  max-width: 200px;
  max-height: 60px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  color: ${props => props.color ? props.color : 'black'}
`

