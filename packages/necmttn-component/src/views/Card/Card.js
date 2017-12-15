import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import CardContent from './CardContent'
import CardHeader from './CardHeader'

export default class Card extends React.Component {
  static Content = CardContent
  static Header = CardHeader
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
      <CardWrapper onClick={this.handleClick} active={active} color={color}>
        {children}
      </CardWrapper>
    )
  }
}


const CardWrapper = styled.figure`
  max-width: 1200px;
  min-width: 600px;
  max-height: 600px;
  padding: 3em 1em;
  border: 1px solid black;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  color: ${props => props.color ? props.color : 'black'}
`
