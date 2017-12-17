import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  padding: 10px;
  color: ${props => props.color ? props.color : '#ffffff'}
`

export default Content
