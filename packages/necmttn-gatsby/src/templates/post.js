import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Article } from 'necmttn-component'
import { Helmet } from 'react-helmet'
import ReactPixel from 'react-facebook-pixel';


const PostRoute = (props) => {
  const data = props.data.markdownRemark
  const isTIL = data.frontmatter.til
  // const Wrapper = (isTIL) ? TILContainer : BlogContainer
  ReactPixel.track("ViewContent", {
    ...data.frontmatter
    })
  return (
    <Wrapper>
      <Helmet title={data.frontmatter.title}>
        <title>Necmttn - {data.frontmatter.title}</title>
        <meta name="description" content={data.excerpt} />
        <meta property="og:type" content={data.frontmatter.type || "article"} />
        <meta property="og:title" content={data.frontmatter.title} />
        <meta property="og:url" content={props.url || "http://necmttn.com"} />
        <meta property="og:description" content={data.frontmatter.desc || data.excerpt} />
        <meta property="og:image" content={data.frontmatter.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@necmttn" />
        <meta name="twitter:creator" content="@necmttn" />
        <meta name="twitter:title" content={data.frontmatter.title} />
        <meta name="twitter:description" content={data.frontmatter.desc || data.excerpt} />
        <meta name="twitter:image" content={data.frontmatter.image} />
        <link rel="canonical" href={props.url || "http://necmttn.com"} />
        <link rel="icon" type="image/png" href="https://avatars0.githubusercontent.com/u/5212808?s=40&v=4" />
      </Helmet>
      <Article post={data}></Article>
    </Wrapper>
  )
}

// TODO: add rss
// <link rel="alternate" type="application/rss+xml" href="http://necmttn.com/rss.xml" />

const wrapperShowUp = keyframes`
  0% {
    opacity: 0.00001;
  }
  10% {
    opacity: 1;
  }
`;

const Wrapper = styled.main`
  background: ${props => props.theme.post.backgrounds.wrapper};
  opacity: 1;
  overflow: auto;
  height: 100%;
  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.M}) {
    animation-name: ${wrapperShowUp};
    animation-duration: 5s;
    padding: 3em 3.5em 6em;
  }
  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.L}) {
    left: ${props =>
      props.navigatorIsActive ? props.theme.navigator.sizes.asideWidth : 0};
    padding: 3.5em 3.5em 3em;
  }
`;


export default PostRoute

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(fields: {slug: {eq: $path}}) {
      fileAbsolutePath
      html
      excerpt
      frontmatter {
        title
        subTitle
        createdDate
        updatedDate
        til
        credit
        image
        imageSize
        imageHeight
      }
    }
  }
`;
