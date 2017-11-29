import React from 'react'
import SplashScreen from './SplashScreen'
import styled from 'styled-components'
import Quote from './Quote'

const Index = (props) => {
  const { langKey }  = props.pathContext;
  console.log(props)
  return (
    <Intro>
      <SplashScreen currentLangKey={langKey}/>
      <Quote currentLangKey={langKey} />
    </Intro>
  )
}


const Intro = styled.article`
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`
export default Index
