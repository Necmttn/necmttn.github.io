import React from 'react'
import Index from '../Views/IndexPage'
import graphql from 'graphql'

export default (props) => <Index {...props} />

export const pageQuery = graphql`
  query IndexZhQuery {
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { draft: { ne: true } },
        fields: { langKey: { regex: "/(zh|any)/" } }
      },
    ) {
      edges {
        node{
          frontmatter{
            title,
            date
          },
          fields{
            slug,
            langKey
          },
          excerpt
        }
      }
    }
    site{
      siteMetadata {
        title
      }
    }
  }
`;
