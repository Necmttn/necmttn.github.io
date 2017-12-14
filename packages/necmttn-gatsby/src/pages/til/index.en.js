import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const TIL = (props) => {
  const posts = props.data.allMarkdownRemark.edges
  return (
    <div>
      Til Posts
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


export const tilEnQuery = graphql`
query tilEnQuery{
	allMarkdownRemark(
    filter: {
    	frontmatter: {til: {eq: true}}
      fields: {langKey: {eq: "en" }}
  	}
  ) {
	  edges {
	    node {
	      id
        fields {
          langKey
          slug
        }
        frontmatter {
          title
          til
        }
        excerpt
	    }
	  }
	}
}
`;

export default TIL
