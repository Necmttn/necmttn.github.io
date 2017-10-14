import React from 'react'
import Link from 'gatsby-link'
const IndexPage = () => (
  <div>
    <h1>Hello</h1>
    <p>I am Necmettin Karakaya, </p>
    <p>self-tought software developer</p>
    <p>Currently working at <a href="http://kiwiinc.net/"><bold>Kiwi Inc.</bold></a></p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
