import React from 'react'
import styled from 'styled-components'
import coding from '../../pages/gifs/coding.gif'
import Link from 'gatsby-link'
import { FlickerText } from 'necmttn-component'
import * as t from '../../i18n'
import Typist from 'react-typist'
import neco from './neco.png'

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: false,
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

  getWelcomeMsg = () => {
    return {
      en: (
        <TextBodyContainer>
          <div>
            Hey, <br />
            This is Necmettin Karakaya <br />
            self-taught software <MagicWord onMouseEnter={() => this.mouseEnter('code')} onMouseLeave={() => this.mouseLeave('code')}> engineer </MagicWord> <br/>
          </div>
          <div> Life-long learner, Digital Nomad </div>
        </TextBodyContainer>
      ),
      zh: (
        <TextBodyContainer>
          <div>
            你好, <br />
            我是 Necmettin Karakaya <br />
            自学成才的软件 <MagicWord onMouseEnter={() => this.mouseEnter('code')} onMouseLeave={() => this.mouseLeave('code')}> 工程师 </MagicWord> <br/>
          </div>
          <div> 终身学习者, 数字游牧人</div>
        </TextBodyContainer>
      ),
      tr: (
        <TextBodyContainer>
          <div>
            Merhaba, <br />
            Ben Necmettin Karakaya <br />
            Alayli yazilim <MagicWord onMouseEnter={() => this.mouseEnter('code')} onMouseLeave={() => this.mouseLeave('code')}> mühendisi </MagicWord> <br/>
          </div>
          <div> Yaşam boyu öğrenci olan , gezgin. </div>
        </TextBodyContainer>
      )
    };
  };
  render() {
    return (
      <Section>
        <Picture>
          <img src={neco} />
        </Picture>
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

const Picture = styled.figure`
  position: relative;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 10px 10vw;
  width: 80%;
  img {
    border-radius: 50%;
    width: 100%;
    max-width: 300px;
    margin: 10px;
  }
  @media ${props => props.theme.mediaQuery.Small} {
    margin: 20px;
    justify-content: center;
  }
`


const TextBodyContainer = styled.div`
  margin-left: 10vw;
  display: flex;
  align-items: flex-start;
  text-align: left;
  justify-content: space-between;
  flex-flow: column nowrap;
  transition: 1s;
  div {
    font-size: 2em;
    @media ${props => props.theme.mediaQuery.HD} {
      font-size: 4em;
      line-height: 1.2em;
    }
    @media ${props => props.theme.mediaQuery.Desktop} {
      font-size: 3em;
      line-height: 1.15em;
    }
    @media ${props => props.theme.mediaQuery.Medium} {
      font-size: 2.5em;
      line-height: 1.10em;
    }
    @media ${props => props.theme.mediaQuery.Small} {
      font-size: 1.6em;
      line-height: 1.05em;
    }
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
