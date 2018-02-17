import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import * as t from '../../i18n'

const BlogLayout = (props) => {
  const data = props.data.allMarkdownRemark
  const posts = (data) ? data.edges : []

  return (
    <Wrapper>
      <Header />
      <ul>
      {posts.map(post => {
        const title = post.node.frontmatter.title
        const tags = post.node.frontmatter.tags
        const createdDate = post.node.frontmatter.createdDate
        const link = post.node.fields.slug
        const excerpt = post.node.excerpt
        return (
          <Post
            title={title}
            link={link}
            excerpt={excerpt}
            tags={tags}
            date={createdDate}
          />
        )
      })}
      </ul>
    </Wrapper>
  )
}


const Header = () => (
  <HeaderWrapper>
    <h1> {t.JournalHeader} </h1>
    <h4> {t.JournalSubHeader} </h4>
  </HeaderWrapper>
)


// TODO: tag, date
const Post = ({title, excerpt, link, tags, date}) => (
    <PostWrapper>
      <Link to={link}>
        <div>
          {date}
        </div>
        <div>
          <header> {title} </header>
          <section className="excerpt">
            <p>{excerpt}</p>
          </section>
          <footer>
            <p> {tags} </p>
          </footer>
        </div>
      </Link>
    </PostWrapper>
)



const PostWrapper = styled.article`
  padding: 10px 0;
  a {
    text-decoration: none;
    color: ${props => props.theme.color};
  }
  display: flex;
  header {
    font-weight: 700;
  }

`

const HeaderWrapper = styled.div`
  text-align: center;
  h1 {
    font-weight: bold;
  }
`


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  padding: 20px 10vw;
`
export default BlogLayout
