import React from 'react'
import styled from 'styled-components'


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
        <div>
          <p>
            Hello, <br/>
            I am Necmettin Karakaya <br />
            self-tought software <MagicWord onMouseEnter={() => this.mouseEnter('code')} onMouseLeave={() => this.mouseLeave('code')}> developer </MagicWord> <br/>
            Currently working at <a href="http://kiwiinc.net/"><span className="Mesh">Mesh</span></a> <br/>
            building cross platform app for UAV devices. </p>
          <p> Life-long learner, pure geek </p>
        </div>
      ),
      zh: (
        <div>
          <p>
            你好, <br/>
            I am Necmettin Karakaya <br />
            self-tought software <MagicWord onMouseEnter={() => this.mouseEnter('code')} onMouseLeave={() => this.mouseLeave('code')}> developer </MagicWord> <br/>
            Currently working at <a href="http://kiwiinc.net/"><span className="Mesh">Mesh</span></a> <br/>
            building cross platform app for UAV devices. </p>
          <p> Life-long learner, pure geek </p>
        </div>
      ),
      tr: (
        <div>
          <p>
            Merhaba, <br/>
            I am Necmettin Karakaya <br />
            self-tought software <MagicWord onMouseEnter={() => this.mouseEnter('code')} onMouseLeave={() => this.mouseLeave('code')}> developer </MagicWord> <br/>
            Currently working at <a href="http://kiwiinc.net/"><span className="Mesh">Mesh</span></a> <br/>
            building cross platform app for UAV devices. </p>
          <p> Life-long learner, pure geek </p>
        </div>
      )
    };
  };
  render() {
    return (
      <div>
        {this.getWelcomeMsg()[this.props.currentLangKey]}
      </div>
    )
  }
}


const MagicWord = styled.span`
  border-bottom: 3px solid #9dffc8;
`

export default SplashScreen
