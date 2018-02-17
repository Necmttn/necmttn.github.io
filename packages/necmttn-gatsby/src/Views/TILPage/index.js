import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { Card } from 'necmttn-component'
import { H1 } from '../../components/Text'
import * as t from '../../i18n'

const TilPage = (props) => {
  const data = props.data.allMarkdownRemark
  const posts = (data) ? data.edges : [];
  return (
    <Wrapper>
      <HeaderWrapper>
        <h1>{t.tilHeader}</h1>
        <h4>{t.tilSubHeader}</h4>
      </HeaderWrapper>
      {posts.map(post => {
        const content = post.node.html
        const title = post.node.frontmatter.title
        const link = post.node.fields.slug
        const excerpt = post.node.excerpt
        return (
        <Card key={link}>
          <Card.Header LinkComp={Link} to={link}>
            <H1>{title}</H1>
          </Card.Header>
          <Card.Content>
            <div dangerouslySetInnerHTML={{ __html: content }}>
            </div>
          </Card.Content>
        </Card>
        )
      })}
    </Wrapper>
  )
}


const Wrapper = styled.div`
  height: 100%;
  max-width: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
`

const HeaderWrapper = styled.div`
  text-align: center;
  h1 {
    font-weight: bold;
    text-transform: uppercase;
  }
`

export default TilPage
