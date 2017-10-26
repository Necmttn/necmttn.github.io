import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"


const IndexPage = () => (
  <div>
    <h1>Hello</h1>
    <p>I am Necmettin Karakaya, </p>
    <p>self-tought software developer</p>
    <p>Currently working at <a href="http://kiwiinc.net/"><bold>Kiwi Inc.</bold></a></p>
    <p>building cross platform app for UAV devices.</p>
    <p>
      Using the technologies like <a href="https://electron.atom.io/"> <bold>Electron.js</bold></a>,
      <a href="https://vuejs.org/"><bold>Vuejs</bold></a>, <a href="https://reactjs.org/"><bold>React</bold></a>
    </p>
    <Link to="/blog/">Go to my blog</Link>
  </div>
)




export default IndexPage
