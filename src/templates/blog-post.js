import React from 'react'
import styled from 'styled-components'

const BlogPostRoute = (props) => {
  const data = props.data.markdownRemark
  console.log(data)
  return (
    <BlogContainer>
      <h1> {data.frontmatter.title} </h1>
      <div dangerouslySetInnerHTML={{ __html: data.html }}>
      </div>
    </BlogContainer>
  )
}


const BlogContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 30px 10vw;
  height: 100vh;
`

export default BlogPostRoute
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(fields: {slug: {eq: $path}}) {
      fileAbsolutePath
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`;
