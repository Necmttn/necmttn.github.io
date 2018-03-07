import React from 'react'
import styled from 'styled-components'
import coding from '../../pages/gifs/coding.gif'
import Link from 'gatsby-link'
import { FlickerText } from 'necmttn-component'
import Typist from 'react-typist'

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: false,
      typing: true,
    };
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

  done = () => {
    this.setState({ typing: false }, () => {
      this.setState({ typing: true })
    });
  }

  getWelcomeMsg = () => {
    return {
      en: (
        <TextBodyContainer>
          <p>
            I am Necmettin Karakaya <br />
            self-taught software <MagicWord onMouseEnter={() => this.mouseEnter('code')} onMouseLeave={() => this.mouseLeave('code')}> engineer </MagicWord> <br/>
          </p>
          <p> Life-long learner, Digital Nomad </p>
        </TextBodyContainer>
      ),
      zh: (
        <TextBodyContainer>
          <p>
            我是 Necmettin Karakaya <br />
            自学成才的软件 <MagicWord onMouseEnter={() => this.mouseEnter('code')} onMouseLeave={() => this.mouseLeave('code')}> 工程师 </MagicWord> <br/>
          </p>
          <p> 终身学习者, 数字游牧人</p>
        </TextBodyContainer>
      ),
      tr: (
        <TextBodyContainer>
          <p>
            Ben Necmettin Karakaya <br />
            Alayli yazilim <MagicWord onMouseEnter={() => this.mouseEnter('code')} onMouseLeave={() => this.mouseLeave('code')}> mühendisi </MagicWord> <br/>
          </p>
          <p> Yaşam boyu öğrenci olmaya inan , gezgin. </p>
        </TextBodyContainer>
      )
    };
  };
  render() {
    return (
      <Section>
        <TextBodyContainer>
          <p>
            {
              (this.state.typing)
              ? (<Typist  onTypingDone={() => this.done()}>
                  <Typist.Delay ms={500} />
                  Hello,
                  <Typist.Backspace count={6} delay={600} />
                  你好,
                  <Typist.Backspace count={3} delay={1200} />
                  Merhaba,
                  <Typist.Backspace count={8} delay={1600} />
                  01001000 01101001,
                  <Typist.Backspace count={18} delay={1700} />
                  Salut!,
                  <Typist.Backspace count={7} delay={400} />
                  Hola,
                  <Typist.Backspace count={5} delay={300} />
                  Привет!
                  <Typist.Backspace count={12} delay={900} />
                </Typist>)
              : null
            }
          </p>
        </TextBodyContainer>
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
  transition: 1s;
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
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
`

const GifBodyContainer = styled.div`
  margin-left: auto;
  margin-right: 10vw;
  position: absolute;
  right: 10vw;

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
