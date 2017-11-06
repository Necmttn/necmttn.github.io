import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"
import { Bold } from '../components/Text'

import coding from './gifs/coding.gif'

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
  constructor(props){
    super(props)
    this.state = {
      code: false
    }
  }

  mouseEnter(name) {
    this.setState({
      [name]: true
    })
  }

  mouseLeave(name) {
    this.setState({
      [name]: false
    })
  }

  render() {
    return (
      <TextBodyContainer>
        <div>
          <p>
            Hello, <br/>
            I am Necmettin Karakaya <br />
            self-tought software <MagicWord onMouseEnter={() => this.mouseEnter('code')} onMouseLeave={() => this.mouseLeave('code')}> developer </MagicWord> <br/>
            Currently working at <a href="http://kiwiinc.net/"><span className="Mesh">Mesh</span></a> <br/>
            building cross platform app for UAV devices. </p>
          <p> Life-long learner, pure geek </p>
        </div>
        <div className="gifArea">
            <GifWrapper src={coding} display={this.state.code}/>
        </div>
      </TextBodyContainer>
    )
  }
}



const MagicWord = styled.span`
  border-bottom: 3px solid #9dffc8;
`

const GifWrapper = styled.img`
  display: ${props => props.display ? 'block' : 'none' }
`

const TextBodyContainer = styled.div`
  padding: 20px;
  max-width: 1100px;
  width: 70vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row wrap;
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
