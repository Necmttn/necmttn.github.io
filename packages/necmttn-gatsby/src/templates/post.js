import React from 'react'
import styled from 'styled-components'

const PostRoute = (props) => {
  const data = props.data.markdownRemark
  const isTIL = data.frontmatter.til
  const Wrapper = (isTIL) ? TILContainer : BlogContainer
  return (
    <Wrapper>
      <h1> {data.frontmatter.title} </h1>
      <div dangerouslySetInnerHTML={{ __html: data.html }}>
      </div>
    </Wrapper>
  )
}

const BlogContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 30px 10vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`


const TILContainer = styled.div`
  display: flex;
  background: red;
  flex-flow: column nowrap;
  padding: 30px 10vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
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
