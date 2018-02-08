import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import reset from 'styled-reset'

const baseStyles = () => injectGlobal`
  // if you have another global style add here.
  ${reset}

  * {
    font-family: Open Sans,San Francisco,sans-serif
  }

  h1 {
    font-size: 2.0rem;
    line-height: 2.4rem;
    padding-bottom: 0.1rem;
  }

  h2 {
    font-size: 1.8rem;
    line-height: 1.6rem;
  }

  h3 {
    font-size: 1.6rem;
    line-height: 1.6rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6rem;
  }
`

export default baseStyles
