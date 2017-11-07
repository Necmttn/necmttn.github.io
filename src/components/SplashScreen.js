import React from 'react'
import styled from 'styled-components'
import coding from '../pages/gifs/coding.gif'
import Link from 'gatsby-link'

class SplashScreen extends React.Component {
  constructor(props) {
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

  getWelcomeMsg = () => {
    return {
      en: (
        <TextBodyContainer>
          <p>
            Hello, <br/>
            I am Necmettin Karakaya <br />
            self-tought software <MagicWord onMouseEnter={() => this.mouseEnter('code')} onMouseLeave={() => this.mouseLeave('code')}> developer </MagicWord> <br/>
            Currently working at <a href="http://kiwiinc.net/"><span className="Mesh">Mesh</span></a> <br/>
            building cross platform app for UAV devices. </p>
          <p> Life-long learner, pure geek </p>
        </TextBodyContainer>
      ),
      zh: (
        <TextBodyContainer>
          <p>
            你好, <br/>
            I am Necmettin Karakaya <br />
            self-tought software <MagicWord onMouseEnter={() => this.mouseEnter('code')} onMouseLeave={() => this.mouseLeave('code')}> developer </MagicWord> <br/>
            Currently working at <a href="http://kiwiinc.net/"><span className="Mesh">Mesh</span></a> <br/>
            building cross platform app for UAV devices. </p>
          <p> Life-long learner, pure geek </p>
        </TextBodyContainer>
      ),
      tr: (
        <TextBodyContainer>
          <p>
            Merhaba, <br/>
            I am Necmettin Karakaya <br />
            self-tought software <MagicWord onMouseEnter={() => this.mouseEnter('code')} onMouseLeave={() => this.mouseLeave('code')}> developer </MagicWord> <br/>
            Currently working at <a href="http://kiwiinc.net/"><span className="Mesh">Mesh</span></a> <br/>
            building cross platform app for UAV devices. </p>
          <p> Life-long learner, pure geek </p>
        </TextBodyContainer>
      )
    };
  };
  render() {
    return (
      <Section>
        <Link to="/tr/">Turkce</Link>
        <Link to="/en/">English</Link>
        <Link to="/zh/">中文</Link>
        {this.getWelcomeMsg()[this.props.currentLangKey]}
        <GifBodyContainer>
          <GifWrapper src={coding} display={this.state.code}/>
        </GifBodyContainer>
      </Section>
    )
  }
}



const TextBodyContainer = styled.div`
  padding: 20px;
  max-width: 1100px;
  width: 70vw;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
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

const GifBodyContainer = styled.div`
  margin-left: auto;
`
const GifWrapper = styled.img`
  display: ${props => props.display ? 'block' : 'none' }
`

const MagicWord = styled.span`
  border-bottom: 3px solid #9dffc8;
`

export default SplashScreen
