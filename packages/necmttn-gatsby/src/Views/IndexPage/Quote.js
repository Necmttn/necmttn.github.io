import React from 'react'
import styled from 'styled-components'
import * as t from '../../i18n'
import { Icon } from 'necmttn-component'

const Quote = ({currentLangKey}) => {
  return (
    <ThickContainer>
      <Icon.Flag	width="64" height="64">
      </Icon.Flag>
      {t.smoothSea}
    </ThickContainer>
  )
}

const ThickContainer = styled.div`
	background: ${props => props.theme.colors.blue};
	display: flex;
	width: 100%;
	padding: 10vw;
	align-items: center;
	& svg {
		width: 64px;
		height: 64px;
		margin-right: 2vw;
	}

`


export default Quote
