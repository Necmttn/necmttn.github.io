import React from 'react'
import SplashScreen from './SplashScreen'
import styled from 'styled-components'
import LangNav from './LangNav'

const Index = (props) => {
  const { langKey }  = props.pathContext;
  return (
    <Intro>
      <LangNav />
      <SplashScreen currentLangKey={langKey}/>
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
