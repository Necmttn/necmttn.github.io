import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { FlagIcon } from './Icon'

const Quote = ({currentLangKey}) => {
  return (
    <ThickContainer>
			<FlagIcon	width="64" height="64" />

			<FormattedMessage id="index.quote" >
				{
					(txt) => (
						<h1>{txt}</h1>
					)
				}
			</FormattedMessage>
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
