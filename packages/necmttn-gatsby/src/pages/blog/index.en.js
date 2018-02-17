import React from 'react'
import Link from 'gatsby-link'
import BlogLayout from '../../Views/BlogPage'

const Blog = (props) => {
  return (<BlogLayout {...props} />)
}


export const pageQuery = graphql`
  query BlogEnQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          til: {ne: true}
          draft: {ne: true}
        }
        fields: {langKey: {eq: "en" }}
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
            subTitle
            tags
            createdDate
          }
          excerpt
        }
      }
    }
  }
`;

export default Blog
