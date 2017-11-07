import React from 'react'
import SplashScreen from './SplashScreen'


const Index = (props) => {
  const { langKey }  = props.pathContext;
  return (
    <div>
      <SplashScreen currentLangKey={langKey}/>
    </div>
  )
}

export default Index
