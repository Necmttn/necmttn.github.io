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
  bottom: 0;
  left: 0;
  opacity: 1;
  margin-top: ${props => props.theme.topBar.sizes.height}px;
  overflow: auto;
  padding: 1.5em 1.5em 5.5em;
  position: absolute;
  right: 0;
  top: 0;
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


const BlogContainer = styled.div`
  flex-flow: column nowrap;
  padding: 30px 10vw;
  width: 600px;
  justify-content: center;
  align-items: center;
`


const TILContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 30px 10vw;
  height: 100vh;
  justify-content: flex-start;
  align-items: flex-start;
`

export default PostRoute

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(fields: {slug: {eq: $path}}) {
      fileAbsolutePath
      html
      excerpt
      frontmatter {
        title
        til
      }
    }
  }
`;
