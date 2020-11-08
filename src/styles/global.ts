import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  #__next {
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #__next {
    height: 100vh;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`
