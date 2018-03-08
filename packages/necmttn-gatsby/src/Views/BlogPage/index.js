import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import * as t from '../../i18n'

const BlogLayout = (props) => {
  const data = props.data.allMarkdownRemark
  const posts = (data) ? data.edges : []
  const postsArray = posts.map(post => {
        const title = post.node.frontmatter.title
        const tags = post.node.frontmatter.tags
        const createdDate = post.node.frontmatter.createdDate
        const link = post.node.fields.slug
        const excerpt = post.node.excerpt
        return (
          <Post
            key={link}
            title={title}
            link={link}
            excerpt={excerpt}
            tags={tags}
            date={createdDate}
          />
        )
      })
  return (
    <Wrapper>
      <Header />
      {postsArray}
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
const Post = ({title, excerpt, link, tags, date}) => {
  const tagsGroup = tags && tags.map(tag => <Tag key={tag} title={tag} link={`/tag/${tag}`} />)
  return (
    <PostWrapper key={link}>
      <Link to={link} className="content">
        <div className="date">
          {date}
        </div>
        <div>
          <header> {title} </header>
          <section className="excerpt">
            <p>{excerpt}</p>
          </section>
        </div>
      </Link>
      <footer>
        <div className="tags">
          {tagsGroup}
        </div>
      </footer>
    </PostWrapper>
  )
}

const Tag = ({title, link}) => (
  <span className="tag">
    <Link to={link}> {title} </Link>
  </span>
)


const PostWrapper = styled.article`
  padding: 10px 0;
  max-width: 40em;
  font-family: Gotham SSm,Helvetica,Arial,sans-serif;
  .content {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    .date {
      color: rgba(255, 0, 0, .7);
      padding-right: 10px
    }
    header {
      font-weight: 700;
    }
    .excerpt p {
      line-height: 18px;
    }
  }
  footer {
    margin-left: 10px;
    .tags {
      .tag a {
        color: #555555;
        border-bottom: 1px dashed purple;
        margin: 5px 10px 0 0;
      }
    }
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.color};
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
  justify-content: flex-start;
  align-items: center;
  flex-flow: column nowrap;
  padding: 20px 10vw;
  min-height: 100vh;
`
export default BlogLayout
