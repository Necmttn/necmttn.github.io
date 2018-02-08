import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { Card } from 'necmttn-component'
import { H1 } from '../../components/Text'

const TIL = (props) => {
  const posts = props.data.allMarkdownRemark.edges
  const data = props.data.markdownRemark
  return (
    <Wrapper>
      <BigHeader>
        TODAY I LEARNED
      </BigHeader>
      <ul>
      {posts.map(post => {
        const content = post.node.html
        const title = post.node.frontmatter.title
        const link = post.node.fields.slug
        const excerpt = post.node.excerpt
        return (
        <li key={link}>
          <Card>
            <Card.Header LinkComp={Link} to={link}>
              <H1>{title}</H1>
            </Card.Header>
            <Card.Content>
              <div dangerouslySetInnerHTML={{ __html: content }}>
              </div>
            </Card.Content>
          </Card>
        </li>
        )
      })}
      </ul>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  height: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
`

const BigHeader = styled.h1`
  font-size: 7vw;
  text-transform: uppercase;
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
        html
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
