import styled from 'styled-components';
import { useState } from 'react';
import Search from '../../assets/search.svg';

function SearchBar({ setResult, setErrorMsg }) {

    const [search, setSearch] = useState('')
    const [emptySearch, setEmptySearch] = useState(false)
    
    const handleSearch = async (e) => {
        e.preventDefault()

        // if search is empty or only spaces
        if (search === '' || !search.replace(/\s/g, '').length) {
            setEmptySearch(true)
            setResult([])
            setErrorMsg([])
            return
        }

        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
        const data = await res.json()

        if (res.status >= 400 && res.status <= 600) {
            setErrorMsg(data)
            setResult([]) // to clear the result
            } else {
            setResult(data[0])
            setErrorMsg([]) // to clear the error message
            }
        setSearch('')
    }


    return (
        <SearchBarWrapper onSubmit={handleSearch}>
            {/* set emptySearch to false when there is a value in the input */}
            <SearchBarInput placeholder="Search for any word..." value={search} $emptySearch={emptySearch}
            onChange={(e) => {setSearch(e.target.value); setEmptySearch(false)}} />
            <EmptyErrorMsg>
                {emptySearch && <p style={{color: '#FF0000'}}>Whoops, can't be empty.</p>}
            </EmptyErrorMsg>
        </SearchBarWrapper>
    )
}

export default SearchBar

const SearchBarWrapper = styled.form`
    width: 100%;
`;

const SearchBarInput = styled.input`
    width: 100%;
    height: 64px;
    padding: 24px 64px 24px 24px;
    border-radius: 16px;
    border: none;
    background-color: ${({ theme }) => theme.bgSecondary};
    font-size: 1.25rem; // 20px
    font-weight: 700; 
    background-image: url(${Search});
    background-repeat: no-repeat;
    background-position: 95% 50%;
    color: ${({ theme }) => theme.textPrimary};
    transition: all .1s ease-in-out;

    &::placeholder {
        color: ${({ theme }) => theme.textPrimary};
        opacity: 0.5;
    }

    //if input is focused purple outline. If emptySearch is true, red outline
    &:focus {
        outline: solid 2px ${props => props.$emptySearch ? '#FF0000' : '#A445ED'};
    }

    @media screen and (max-width: 442px) {
        font-size: 0.9rem; // 16px
        height: 48px;
    }

`;

const EmptyErrorMsg = styled.div`
    width: 100%;
    height: 25px;
    margin-top: 10px;
    font-size: 1.25rem; // 20px
    color: #FF0000;

    @media screen and (max-width: 442px) {
        font-size: 0.9rem; // 16px
        height: 20px;
    }
`;
