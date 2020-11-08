import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 2.4rem;
  margin-top: 4.2rem;

  @media (min-width: 700px) {
    font-size: 5.2rem;
  }
`

export const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 4.2rem;

  @media (min-width: 700px) {
    font-size: 2.4rem;
  }
`

export const ButtonGroup = styled.div`
  filter: drop-shadow(0 0 0.75rem black);

  button {
    outline: none;
    border: 0;
    width: 8.4rem;
    height: 5.2rem;
    font: 700 1.6rem Roboto, sans-serif;
    cursor: pointer;
  }
`

export const ButtonLeft = styled.button`
  border-bottom-left-radius: 25px;
  border-top-left-radius: 25px;
`

export const ButtonRight = styled.button`
  border-bottom-right-radius: 25px;
  border-top-right-radius: 25px;
  background-color: black;
  color: white;
`

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Main = styled.div`
  font-family: Roboto, sans-serif;
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
`
