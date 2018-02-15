import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Article } from 'necmttn-component'

const PostRoute = (props) => {
  const data = props.data.markdownRemark
  const isTIL = data.frontmatter.til
  // const Wrapper = (isTIL) ? TILContainer : BlogContainer
  return (
    <Wrapper>
      <Article post={data}></Article>
    </Wrapper>
  )
}


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
