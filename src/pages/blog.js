import React from 'react'

const Blog = (props) => {
  const posts = props.data.allMarkdownRemark.edges

  return (
    <div>
      <h1> blog pages </h1>
      <ul>
      {posts.map(post => {
        const title = post.node.frontmatter.title
        const excerpt = post.node.excerpt
        return (
        <li>
          <h1>{title}</h1>
          <p>{excerpt}</p>
        </li>
        )
      })}
      </ul>
    </div>
  )
}


export const pageQuery = graphql`
  query BlogEnQuery {
    allMarkdownRemark{
      edges {
        node{
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
