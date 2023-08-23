import { useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from './styles/GlobalStyles'
import { useCallback } from 'react'

import Header from './components/Header/Header'
import SearchBar from './components/Search/SearchBar'
import ResultBody from './components/Result/Result'

function App() {

  const [result, setResult] = useState([])

  const handleResult = useCallback((search) => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then(res => res.json())
      .then(data => setResult(data[0]))
      .catch(err => console.log(err))
  }, [])

  console.log(result)


  return (
    <Main>
      <GlobalStyle />
      <Header />
      <SearchBar handleResult={handleResult} />
      {result.length !== 0 && <ResultBody result={result} />}
    </Main>
  )
}

export default App

const Main = styled.main`
  max-width: 737px;
  margin: 58px auto;
`
