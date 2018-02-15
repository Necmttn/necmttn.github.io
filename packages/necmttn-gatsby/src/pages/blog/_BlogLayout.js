import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const BlogLayout = (props) => {
  const data = props.data.allMarkdownRemark
  const posts = (data) ? data.edges : []

  return (
    <Wrapper>
      <Header />
      <ul>
      {posts.map(post => {
        console.log(post)
        const title = post.node.frontmatter.title
        const tags = post.node.frontmatter.tags
        const link = post.node.fields.slug
        const excerpt = post.node.excerpt
        return (
          <Post
            title={title}
            link={link}
            excerpt={excerpt}
            tags={tags}
          />
        )
      })}
      </ul>
    </Wrapper>
  )
}


const Header = () => (
  <HeaderWrapper>
    <h1>Journal </h1>
    <h4>Random Toughts, Software and Nomadic life </h4>
  </HeaderWrapper>
)


// TODO: tag, date
const Post = ({title, excerpt, link, tags}) => (
  <Link to={link}>
    <PostWrappeer>
      <header> {title} </header>
      <section className="excerpt">
        <p>{excerpt}</p>
      </section>
      <footer>
        <p> {tags} </p>
      </footer>
    </PostWrappeer>
  </Link>
)



const PostWrappeer = styled.article`
  padding: 10px 0;
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
