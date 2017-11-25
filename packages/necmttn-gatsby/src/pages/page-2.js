import React from 'react'
import Link from 'gatsby-link'
import { Button } from 'necmttn-component'

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Button color="red">
      <Button.Content>
        Hello
      </Button.Content>
    </Button>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
