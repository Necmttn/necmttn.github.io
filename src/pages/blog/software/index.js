import React from 'react'

const Software = (props) => {
  return (
    <h1> Software </h1>
  )
}
export const pageQuery = graphql`
  query BlogEnQuery {
    allMarkdownRemark{
      edges {
        node{
          id
          fields {
            langKey
            slug
          }
          frontmatter{
            title,
          },
          excerpt
        }
      }
    }
  }
`;


export default Software
