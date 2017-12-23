import React from 'react'
import Link from 'gatsby-link'

const Blog = (props) => {
  const posts = props.data.allMarkdownRemark.edges

  return (
    <div>
      <h1> blog pages </h1>
      <ul>
      {posts.map(post => {
        console.log(post)
        const title = post.node.frontmatter.title
        const link = post.node.fields.slug
        const excerpt = post.node.excerpt
        return (
        <li>
          <Link to={link}>{title}</Link>
          <p>{excerpt}</p>
        </li>
        )
      })}
      </ul>
    </div>
  )
}


export const pageQuery = graphql`
  query BlogTRQuery {
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

export default Blog
