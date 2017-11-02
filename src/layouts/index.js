import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import './index.css'

const Header = () => (
  <HeaderContainer>
    <div>
      <FancyLink to="/">
        <h1>
        Software
        </h1>
      </FancyLink>
      <FancyLink to="/">
        <h1>
        Software
        </h1>
      </FancyLink>
      <FancyLink to="/">
        <h1>
        Software
        </h1>
      </FancyLink>
      <FancyLink to="/">
        <h1>
        Software
        </h1>
      </FancyLink>
    </div>
  </HeaderContainer>
)

const FancyLink = styled(Link)`
  color: #42ab79;
  padding-left: 10px;
  &:after {
    content: "º";
    padding-left: 10px;
    color: red;
    text-decoration: none;
  }
`

const HeaderContainer = styled.div`
  margin-bottom: 1.45rem;
  display: flex;
  justify-content: center;
  padding: 1.45rem 1.0875rem;
  border-bottom: 5px dashed #57c7ff;
`

const TemplateWrapper = ({ children }) => (
  <Body>
    <Helmet
      title="Necmttn"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <Container>
      {children()}
    </Container>
  </Body>
)

const Body = styled.div`
  background: #21232d;
  width: 100vw;
  height: 100vh;
`

const Container = styled.div`
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`
TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
