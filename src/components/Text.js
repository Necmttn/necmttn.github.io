import React from 'react'
import styled from 'styled-components'


export const Bold = styled.p`
  font-weight: 800;
`

export const H1 = styled.h1`
  font-size:  24px;

  @media ${props => props.theme.mediaQuery.Small} {
    font-size: 20px;
  }
`

export const H2 = styled.h2`
  font-size:  20px;

  @media ${props => props.theme.mediaQuery.Small} {
    font-size: 18px;
  }
`




