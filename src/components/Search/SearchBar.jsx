import styled from 'styled-components';
import { useState } from 'react';
import Search from '../../assets/search.svg';

function SearchBar({ setResult, setErrorMsg }) {

    const [search, setSearch] = useState('')
    
    const handleSearch = async (e) => {
        e.preventDefault()
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
            <SearchBarInput placeholder="Search for any word..." value={search} onChange={(e) => setSearch(e.target.value)} />
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

    &::placeholder {
        color: ${({ theme }) => theme.textPrimary};
        opacity: 0.5;
    }

    &:focus {
        outline: solid 2px #A445ED;
    }
`;
