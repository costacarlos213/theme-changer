import React, { useState } from 'react'
import Head from 'next/head'
import {
  Title,
  Paragraph,
  ButtonGroup,
  ButtonRight,
  ButtonLeft,
  Container,
  Main
} from '../styles/pages/Home'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../styles/theme'

const Home: React.FC = () => {
  const [theme, setTheme] = useState('light')

  const setLight = () => {
    setTheme('light')
  }
  const setDark = () => {
    setTheme('dark')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Main>
        <Head>
          <title>Create Next App</title>
        </Head>

        <Container>
          <Title>Hello World</Title>
          <Paragraph> ReactJs + NextJs + Styled Components</Paragraph>
          <ButtonGroup>
            <ButtonLeft onClick={setLight}>Claro</ButtonLeft>
            <ButtonRight onClick={setDark}>Escuro</ButtonRight>
          </ButtonGroup>
        </Container>
      </Main>
    </ThemeProvider>
  )
}

export default Home
