import React from 'react'
import styled from 'styled-components'

const FlagIcon = () => (
  <span>
    <svg id="i-flag" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M6 2 L6 30 M6 6 L26 6 20 12 26 18 6 18" />
    </svg>
  </span>
)


export default class Icon extends React.Component {
  static Flag = FlagIcon

  render() {
    return (
      <h1>icon</h1>
    )
  }
}

