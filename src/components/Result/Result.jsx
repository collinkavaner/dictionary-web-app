import styled from 'styled-components'

import ResultHeading from './ResultHeading'
import ContentSection from './ContentSection'
import ResultFooter from './ResultFooter'

const ResultBody = ({ result }) => {

    if (result.length === 0 || result === undefined) {
        return (
            <>
                <EmptySearch>Welcome to the Free Dictionary API. Try searching any word.</EmptySearch>
            </>
        )
    }

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

const EmptySearch = styled.h3`
    width: 100%;
    text-align: center;
    margin-top: 5rem;
`