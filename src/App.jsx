import { useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from './styles/GlobalStyles'
import { useCallback } from 'react'

import Header from './components/Header/Header'
import SearchBar from './components/Search/SearchBar'
import ResultBody from './components/Result/Result'

export default function App() {

  const [result, setResult] = useState([])
  const [errorMsg, setErrorMsg] = useState([])

  const handleResult = useCallback((search) => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then(res => res.json())
      .then(data => {
        if (data.title) {
          setErrorMsg(data)
          setResult([]) // to clear the result
        } else {
          setResult(data[0])
          setErrorMsg([]) // to clear the error message
        }
      })
      .catch(err => console.log(err))
  }, [])

  console.log(result)
  console.log(errorMsg)

  return (
    <Main>
      <GlobalStyle />
      <Header />
      <SearchBar handleResult={handleResult} />
      { errorMsg.length !== 0 ? <ErrorSection errorMsg={errorMsg} /> : <ResultBody result={result} /> }
    </Main>
  )
}

function ErrorSection( {errorMsg} ) {
  return (
    <ErrorMessage>
      <h1>😕</h1>
      <h3>{errorMsg.title}</h3>
      <p>{errorMsg.message} {errorMsg.resolution}</p>
    </ErrorMessage>
  )
}

const Main = styled.main`
  max-width: 737px;
  margin: 58px auto;
`

const ErrorMessage = styled.div`
  margin: 2rem auto;
  width: 100%;
  text-align: center; 

  h1 {
    margin-top: 5rem;
    margin-bottom: 2rem;
  }

  h3 {
    margin-bottom: 1.5rem;
  }
`
