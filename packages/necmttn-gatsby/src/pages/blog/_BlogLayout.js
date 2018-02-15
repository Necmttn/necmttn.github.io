import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const BlogLayout = (props) => {
  const data = props.data.allMarkdownRemark
  const posts = (data) ? data.edges : []

  return (
    <Wrapper>
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
    </Wrapper>
  )
}


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export default BlogLayout
