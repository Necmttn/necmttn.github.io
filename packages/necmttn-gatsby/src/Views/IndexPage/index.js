import React from 'react'
import styled from 'styled-components'
import SplashScreen from './SplashScreen'
const Index = (props) => {
  const { langKey }  = props.pathContext;
  return (
    <Intro>
      <SplashScreen currentLangKey={langKey}/>
    </Intro>
  )
}


const Intro = styled.article`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`
export default Index
