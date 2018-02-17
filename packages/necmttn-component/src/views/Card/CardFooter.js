import React from 'react'
import styled from 'styled-components'

const Footer = ({disqus}) => (
  <FooterWrapper>
    <ShareButtons />
  </FooterWrapper>
)


// TODO: finish social media icons
const ShareButtons = () => (
  <div className="social">
    <span>Facebook </span>
    <span>Twitter </span>
    <span>Tumblr </span>
  </div>
)

const FooterWrapper = styled.footer`
  padding: 10px;
  color: ${props => props.color ? props.color : '#ffffff'}
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  .social {
    margin-left: auto;
  }
`

export default Footer
