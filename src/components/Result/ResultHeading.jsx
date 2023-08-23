import styled from 'styled-components'
import {HiMiniPlay} from 'react-icons/hi2'

const ResultBody = ({ result }) => {
    return (
        <Heading>
            <div>
                <h1>{result.word}</h1>
                <Phonetic>{result.phonetics[0].text || result.phonetics[1].text}</Phonetic>
            </div>
            <AudioButton>
                <HiMiniPlay />
            </AudioButton>
        </Heading>
    )
}

export default ResultBody

const Heading = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0;
`;

const Phonetic = styled.h2`
    margin-top: 10px;
    color: #A445ED;
`;

const AudioButton = styled.button`
    background-color: #e4d2f7;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        fill: #A445ED;
        width: 100%;
        height: 24px;
    }
`;