import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import invoke from 'lodash.invoke'

import CardContent from './CardContent'
import CardHeader from './CardHeader'
import CardFooter from './CardFooter'

export default class Card extends React.Component {
  static Content = CardContent
  static Header = CardHeader
  static Footer = CardFooter

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
  padding: 3em 1em;
  max-width: 600px;
  border: 1px solid ${props => props.theme.dark};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin: 2em 0;
`
