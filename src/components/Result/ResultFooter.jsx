import styled from 'styled-components'
import {HiMiniArrowTopRightOnSquare} from 'react-icons/hi2'

const ResultFooter = ({ result }) => {
    return (
        <Footer>
            <hr />
            <h4>Source<a href={result.sourceUrls} target="_blank" rel="noreferrer">{result.sourceUrls}</a><HiMiniArrowTopRightOnSquare /></h4>
        </Footer>
    )
}

export default ResultFooter

const Footer = styled.footer`
    width: 100%;
    margin-top: 2rem;

    hr {
        width: 100%;
        border: 1px solid #E9E9E9;
    }

    h4 {
        margin-top: 1rem;
        color: #757575;
        font-weight: 400;
        display: flex;
        align-items: center;
        gap: 10px;

        a {
            color: ${({theme}) => theme.textPrimary};
            margin-left: 10px;
        }
    }

    @media screen and (max-width: 442px) {
        h4 {
            font-size: 0.9rem;
            flex-wrap: wrap;
            gap: 5;

            a {
                margin-left: 0;
            }
        }
    }
`


