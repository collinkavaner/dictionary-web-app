import styled from 'styled-components'
import {HiMiniArrowTopRightOnSquare} from 'react-icons/hi2'

const ResultFooter = () => {
    return (
        <Footer>
            <hr />
            <h4>Source<span>https://en.wiktionary.org/wiki/keyboard</span><HiMiniArrowTopRightOnSquare /></h4>
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

        span {
            color: #2D2D2D;
            margin-left: 10px;
        }
    }
`


