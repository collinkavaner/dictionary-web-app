import styled from 'styled-components'

import ResultHeading from './ResultHeading'
import ContentSection from './ContentSection'
import ResultFooter from './ResultFooter'

const ResultBody = ({ result }) => {
    return (
        <Result>
            <ResultHeading result={result} />
            <ContentSection result={result} />
            <ResultFooter result={result} />
        </Result>
    )
}

export default ResultBody

const Result = styled.div`
    width: 100%;
`