import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Article } from 'necmttn-component'
import TranslateMe from '../components/TranslateMe'
const PostRoute = (props) => {
  console.log(props)
  const allPost = props.data.allMarkdownRemark.edges
  let curLocationData = allPost.filter(post => post.node.fields.slug === props.location.pathname)
  const fallBackData = allPost.filter(post => {
    if(post.node.fields.slug === post.node.fields.path) {
      return post // if no langkey exist
    }else {
      return post.node.fields.slug.includes('/en/')
    }
  })[0].node
  let data, draft, fileExist
  if (curLocationData.length > 0) {
    data = curLocationData[0].node
    draft = data.frontmatter.draft
    fileExist = true
  } else {
    data = fallBackData
    draft = true
    fileExist = false
  }
  const { langKey, regexPath }  = props.pathContext;
  const relativePath = regexPath.slice(0, -1).substr(1)
  const isTIL = data.frontmatter.til
  return (
    <Wrapper>
      {(draft) ? <TranslateMe currentLangKey={langKey} relativePath={relativePath} fileExist={fileExist} /> : '' }
      <Article post={data}></Article>
    </Wrapper>
  )
}

const wrapperShowUp = keyframes`
  0% {
    opacity: 0.00001;
  }
  10% {
    opacity: 1;
  }
`;

const Wrapper = styled.main`
  background: ${props => props.theme.post.backgrounds.wrapper};
  bottom: 0;
  left: 0;
  opacity: 1;
  overflow: auto;
  padding: 1.5em 1.5em 5.5em;
  position: absolute;
  right: 0;
  top: 0;
  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.M}) {
    animation-name: ${wrapperShowUp};
    animation-duration: 5s;
    padding: 3em 3.5em 6em;
  }
  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.L}) {
    left: ${props =>
      props.navigatorIsActive ? props.theme.navigator.sizes.asideWidth : 0};
    padding: 3.5em 3.5em 3em;
  }
`;

export default PostRoute

// export const pageQuery = graphql`
//   query blogpostbypath($path: String!) {
//     markdownRemark(fields: {slug: {eq: $path}}) {
//       html
//       excerpt
//       fields {
//         langKey
//         path
//         slug
//       }
//       frontmatter {
//         title
//         til
//         draft
//       }
//     }
//   }
// `;


export const pageQuery = graphql`
  query blogpostbypath($regexPath: String!) {
    allMarkdownRemark(
      filter: {
        fields: {
          path: {
            regex: $regexPath
          }
        }
      }
    ) {
    	edges{
        node {
      		fields {
            langKey
            slug
            path
          }
          html
          excerpt
          frontmatter {
            title
            til
            draft
          }
        }
      }
    }
  }
`
