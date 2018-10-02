import React from 'react'
import graphql from 'graphql'
import styled from 'styled-components'
import { redirectToHome } from 'ptz-i18n'
import blackLogo from '../layouts/nk-logo-black-400.png'


class RedirectIndex extends React.PureComponent {
  constructor(args) {
    super(args);
    const { langs, defaultLangKey } = args.data.site.siteMetadata.languages;
    redirectToHome(langs, defaultLangKey);
  }

  render() {
    return (<Loading />);
  }
}


const Loading = () => {
  return (
    <Wrapper>
      <img src={blackLogo} />
    </Wrapper>
  )
}

const Wrapper  = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 40vw;
    height: auto;
    animation: fadein 2s;
  }

  @keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
  }
`

export default RedirectIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site{
      siteMetadata{
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`;
