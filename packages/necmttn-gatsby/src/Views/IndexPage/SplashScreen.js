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
          </p>
          <p> Life-long learner, pure geek </p>
        </TextBodyContainer>
      ),
      zh: (
        <TextBodyContainer>
          <p>
            你好, <br/>
            I am Necmettin Karakaya <br />
            self-tought software <MagicWord onMouseEnter={() => this.mouseEnter('code')} onMouseLeave={() => this.mouseLeave('code')}> developer </MagicWord> <br/>
          </p>
          <p> Life-long learner, pure geek </p>
        </TextBodyContainer>
      ),
      tr: (
        <TextBodyContainer>
          <p>
            Merhaba, <br/>
            I am Necmettin Karakaya <br />
            self-tought software <MagicWord onMouseEnter={() => this.mouseEnter('code')} onMouseLeave={() => this.mouseLeave('code')}> developer </MagicWord> <br/>
          </p>
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
  text-align: left;
  justify-content: space-between;
  flex-flow: column nowrap;
  @media ${props => props.theme.mediaQuery.small} {
    p {
      font-size: 2em;
      line-height: 1.05em;
    }
  }
  @media ${props => props.theme.mediaQuery.Medium} {
    p {
      font-size: 2.5em;
      line-height: 1.10em;
    }
  }
  @media ${props => props.theme.mediaQuery.Desktop} {
    p {
      font-size: 3em;
      line-height: 1.15em;
    }
  }
  @media ${props => props.theme.mediaQuery.HD} {
    p {
      font-size: 4em;
      line-height: 1.2em;
    }
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
  position: absolute;

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
