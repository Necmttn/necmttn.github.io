import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { Button } from 'necmttn-component'

const TranslateMe = (props) => {
  const  {currentLangKey, relativePath} = props
  const message = () => {
    switch (currentLangKey) {
      case 'en':
        return `This is a stub. Most Probably i haven't got a time to translate it.
                Why don't you help me to translate it.`
        break;
      case 'zh':
        return `这是一个存根。 最可能我没有时间来翻译它.
                你为什么不帮我翻译呢？`
        break;
      case 'tr':
        return `Bu bir taslak. Muhtemelen çevirmek için vaktim yok.
                Neden bana çevirmeme yardım etmiyorsun?`
        break;
      default:
        return `This is a stub. Most Probably i haven't got a time to translate it.
                Why don't you help me to translate it.`
    }
  }
  return (
    <Wrapper>
      <h2>{message()}</h2>
      <a href={`https://github.com/necmttn/necmttn.github.io/blob/dev/packages/necmttn-gatsby/src/pages${
        relativePath
      }`}> Edit On Github </a>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  heiht: 400px;
  padding: 20px 10vw;
  background: ${props => props.theme.colors.blue};
  top: 50%;
  left: 50%;
  margin-top: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  & h2 {
    color: ${props => props.theme.colors.firstLight};
    font-size: 1em;
  }
`

export default TranslateMe


