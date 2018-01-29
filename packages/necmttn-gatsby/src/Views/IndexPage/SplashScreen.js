import React from 'react'
import styled from 'styled-components'
import coding from '../../pages/gifs/coding.gif'
import Link from 'gatsby-link'
import { FlickerText } from 'necmttn-component'


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
            Currently hacking Drone & IOT at <MagicLink target="_blank" href="http://meshtech.co/"><span className="Mesh">Mesh</span></MagicLink> <br/>
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
            Currently working at <MagicLink target="_blank" href="http://kiwiinc.net/"><span className="Mesh">Mesh</span></MagicLink> <br/>
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
            Currently working at <MagicLink target="_blank" href="http://kiwiinc.net/"><span className="Mesh">Mesh</span></MagicLink> <br/>
            building cross platform app for UAV devices. </p>
          <p> Life-long learner, pure geek </p>
        </TextBodyContainer>
      )
    };
  };
  render() {
    return (
      <Section>
        <FlickerText max={20}>
        {this.getWelcomeMsg()[this.props.currentLangKey]}
        </FlickerText>
        <GifBodyContainer>
          <GifWrapper src={coding} display={this.state.code}/>
        </GifBodyContainer>
      </Section>
    )
  }
}



const TextBodyContainer = styled.div`
  margin-left: 10vw;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  line-height: 25px;
  flex-flow: column nowrap;
`

const Section = styled.section`
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const GifBodyContainer = styled.div`
  margin-left: auto;
	margin-right: 10vw;
`
const GifWrapper = styled.img`
  display: ${props => props.display ? 'block' : 'none' }
`

const MagicWord = styled.span`
  border-bottom: 3px solid #9dffc8;
  margin-left: 5px;
`

const MagicLink = styled.a`
  border-bottom: 3px solid #9dffc8;
  margin-left: 5px;
  text-decoration: none;
  color: ${props => props.theme.color}
`
export default SplashScreen
