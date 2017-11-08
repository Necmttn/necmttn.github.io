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
          Journal
      </FancyLink>
      <FancyLink to="/Software">
          Software
      </FancyLink>
      <FancyLink to="/">
          About
      </FancyLink>
      <FancyLink to="/">
          Email
      </FancyLink>
    </div>
  </HeaderContainer>
)
const FancyLink = styled(Link)`
  color: #42ab79;
  padding-left: 10px;
  &:after {
    content: "-";
    padding-left: 10px;
    color: light-green;
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
        { name: 'keywords', content: 'self-tought, software developer, javascript, python' },
      ]}
    />
    <Container>
      {children()}
    </Container>
  </Body>
)

const Body = styled.div`
  width: 100vw;
  height: 100vh;
`

const Container = styled.div`
  max-width: 960px;
  padding-top: 0;
  display: flex;
`
TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
