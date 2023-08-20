import styled from 'styled-components'

import ResultHeading from './ResultHeading'
import NounSection from './ContentSection'
import ResultFooter from './ResultFooter'

const ResultBody = () => {
    return (
        <Result>
            <ResultHeading />
            <NounSection />
            <ResultFooter />
        </Result>
    )
}

export default ResultBody

const Result = styled.div`
    width: 100%;
`