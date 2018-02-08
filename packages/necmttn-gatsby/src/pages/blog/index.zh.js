import React from 'react'
import Link from 'gatsby-link'

const Blog = (props) => {
  const data = props.data.allMarkdownRemark
  const posts = (data) ? data.edges : []

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
            title,
          },
          excerpt
        }
      }
    }
  }
`;

export default Blog
