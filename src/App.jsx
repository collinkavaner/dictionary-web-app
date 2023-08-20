import { useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from './styles/GlobalStyles'

import Header from './components/Header/Header'

function App() {

  return (
    <Main>
      <GlobalStyle />
      <Header />
    </Main>
  )
}

export default App

const Main = styled.main`
  max-width: 737px;
  margin: 0 auto;
  padding: 1rem;
`
