import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"
import { Bold } from '../components/Text'

const IndexPage = () => (
  <Wrapper>
    <Intro>
      <Section>
        <TextBody>
        </TextBody>
      </Section>
      <Section>
      </Section>
    </Intro>
  </Wrapper>
)


// Using the technologies like <a href="https://electron.atom.io/"> <bold>Electron.js</bold></a>,
// <a href="https://vuejs.org/"><bold>Vuejs</bold></a>, <a href="https://reactjs.org/"><bold>React</bold></a>

const Wrapper = styled.div`
  height: 100vh;
`


class TextBody extends React.Component {
  state = {
    neco: true,
    work: false,
    meetup: false,
  }
  codingGif = () =>  (this.state.neco) ? (<img src='./static/coding.gif' />) : ''
  render() {
    return (
      <TextBodyContainer>
        <p>
          Hello <br/>
          I am <bold> Necmettin Karakaya</bold> <br/>
          self-tought software developer <br/>
          Currently working at <a href="http://kiwiinc.net/"><bold>Kiwi Inc.</bold></a> <br/>
          building cross platform app for UAV devices.
        </p>
        <p> some highlighted text </p>
        <div>
          { this.codingGif() }
        </div>
      </TextBodyContainer>
    )
  }
}




const TextBodyContainer = styled.div`
  padding: 20px;
  max-width: 1100px;
`



const Intro = styled.article`
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`

const Section = styled.section`
  background: #1e2328;
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
`




export default IndexPage
