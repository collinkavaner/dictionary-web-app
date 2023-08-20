import { useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from './styles/GlobalStyles'

import Header from './components/Header/Header'
import SearchBar from './components/Search/SearchBar'
import ResultBody from './components/Result/Result'

function App() {

  return (
    <Main>
      <GlobalStyle />
      <Header />
      <SearchBar />
      <ResultBody />
    </Main>
  )
}

export default App

const Main = styled.main`
  max-width: 737px;
  margin: 58px auto;
`
