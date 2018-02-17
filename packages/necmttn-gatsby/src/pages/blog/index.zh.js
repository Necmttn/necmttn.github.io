import React from 'react'
import Link from 'gatsby-link'
import BlogLayout from '../../Views/BlogPage'

const Blog = (props) => {
  return (<BlogLayout {...props} />)
}


export const pageQuery = graphql`
  query BlogZHQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          til: {ne: true}
          draft: {ne: true}
        }
        fields: {langKey: {eq: "zh" }}
      }
    ){
      edges {
        node{
          id
          fields {
            langKey
            slug
          }
          frontmatter{
            title
            createdDate
            tags
          },
          excerpt
        }
      }
    }
  }
`;

export default Blog
