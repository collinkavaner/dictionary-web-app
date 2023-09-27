import { useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/Themes'

import Header from './components/Header/Header'
import SearchBar from './components/Search/SearchBar'
import ResultBody from './components/Result/Result'

export default function App() {

  const [theme, setTheme] = useState('light')
  const [font, setFont] = useState('Lora')
  const [result, setResult] = useState([])
  const [errorMsg, setErrorMsg] = useState([])


  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  const changeFont = (font) => {
    setFont(font)
  }


  console.log(result)
  //console.log(errorMsg)

  return (
    <Main>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme} >
      <GlobalStyle font={font} />
      <Header theme={theme} toggleTheme={toggleTheme} changeFont={changeFont} />
      <SearchBar setResult={setResult} setErrorMsg={setErrorMsg} theme={theme === 'dark' ? darkTheme : lightTheme} />
      { errorMsg.length !== 0 ? <ErrorSection errorMsg={errorMsg} /> : <ResultBody result={result} theme={theme} /> }
      </ThemeProvider>
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
