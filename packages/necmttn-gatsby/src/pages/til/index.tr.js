import React from 'react'
import TilPage from '../../Views/TILPage'

const Til = (props) => {
  return (<TilPage {...props} />)
}


export const tilEnQuery = graphql`
query tilTrQuery{
	allMarkdownRemark(
    filter: {
      frontmatter: {
        til: {eq: true}
        draft: {ne: true}
      }
      fields: {langKey: {eq: "tr" }}
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

export default Til
