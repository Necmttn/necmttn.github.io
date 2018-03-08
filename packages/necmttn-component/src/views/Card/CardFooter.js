import React, {Component} from 'react'
import styled from 'styled-components'
import { Share } from 'react-twitter-widgets'
import {
  FacebookShareButton,
  FacebookShareCount,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  RedditIcon,
  EmailIcon,
} from 'react-share';

class Footer extends Component {
  // TODO: update default url
  static defaultProps = {
    title: "Today I learned",
    link: "http://necmttn.io",
    tags: ["software", "javascript", "devops", "golang"],
    via: "necmttn"
  }

  render() {
    const {
      via,
      title,
      link,
      linkComponent,
      tags
    } = this.props
    const url = `http://necmttn.io${link}`
    return (
      <FooterWrapper>
        <div className="tags">
          {tags.map(tag => {
           return(<Tag
              title={`#${tag.toUpperCase()} `}
              link={`/tag/${tag}`}
              LinkComponent={linkComponent} />
           )
          })}
        </div>
        <div className="social">
          <FacebookShareButton
            url={url}
            quote={title}
            hashtags={tags}
            className="Demo__some-network__share-button">
            <FacebookIcon
              size={32}
              round />
          </FacebookShareButton>
          <TwitterShareButton
            url={url}
            title={title}
            hashtags={tags}
            className="Demo__some-network__share-button">
            <TwitterIcon
              size={32}
              round />
          </TwitterShareButton>
          <LinkedinShareButton
            url={url}
            title={title}
            windowWidth={750}
            windowHeight={600}
            className="Demo__some-network__share-button">
            <LinkedinIcon
              size={32}
              round />
          </LinkedinShareButton>
          <RedditShareButton
            url={url}
            title={title}
            windowWidth={660}
            windowHeight={460}
            className="Demo__some-network__share-button">
            <RedditIcon
              size={32}
              round />
          </RedditShareButton>
        </div>
      </FooterWrapper>
    )
  }
}

const Tag = ({title, link, LinkComponent}) => (
  <span className="tag">
    <LinkComponent to={link}> {title} </LinkComponent>
  </span>
)

const FooterWrapper = styled.footer`
  padding: 10px;
  display: flex;
  flex-flow: row;
  .tags {
    display: flex;
    .tag {
      margin-right: 5px;
      border-top: 1px solid #10ca97;
      padding: 1rem .4rem;
      text-align: center;
      min-width: 120px;
      font-size: 1rem;
      a {
        color: #10ca97;
        opacity: .5;
        text-decoration: none;
        font-weight: bold;
        &:hover {
        opacity: 1;
        }
      }
    }
  }
  .social {
    border-top: 1px solid #33d6ea;
    margin-left: auto;
    display: flex;
    flex-flow: row nowrap;
    .SocialMediaShareButton {
      padding: 0.4rem .4rem;
      margin-right: 5px;
    }
  }
`

export default Footer
