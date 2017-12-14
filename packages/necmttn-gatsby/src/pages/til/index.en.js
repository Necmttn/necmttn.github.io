import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const TIL = (props) => {
  const posts = props.data.allMarkdownRemark.edges
  return (
    <Wrapper>
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
    </Wrapper>
  )
}


const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  padding: 50px 30px;
`


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
