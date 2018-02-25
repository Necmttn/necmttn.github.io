import React, {Component} from 'react'
import styled from 'styled-components'
import { Share } from 'react-twitter-widgets'
class Footer extends Component {
  // TODO: update default url
  static defaultProps = {
    title: "Today I learned",
    link: "necmttn.surge.sh",
    tags: ["software", "javascript", "devops", "golang"],
    via: "necmttn"
  }

  render() {
    const {
      via,
      title,
      link,
      tags
    } = this.props
    const commaSeperatedTags = tags.join(", ")
    const url = `http://necmttn.surge.sh${link}`
    return (
      <FooterWrapper>
        <div className="social">
          <span>Facebook </span>
          <Share url={url} options={{
            text: title,
            size: "large",
            hashtags: commaSeperatedTags,
            via: via
          }}/>
          <span>Tumblr </span>
        </div>
      </FooterWrapper>
    )
  }
}


const FooterWrapper = styled.footer`
  padding: 10px;
  color: ${props => props.color ? props.color : '#ffffff'}
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  .social {
    margin-left: auto;
    .twitter-share-button {
      background: blue;
    }
  }
`

export default Footer
