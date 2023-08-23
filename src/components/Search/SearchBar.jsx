import styled from 'styled-components';
import { useState } from 'react';
import Search from '../../assets/search.svg';

function SearchBar({ handleResult }) {

    const [search, setSearch] = useState('')
    
    const handleSearch = (e) => {
        e.preventDefault()
        handleResult(search)
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
    background-color: #F4F4F4;
    font-size: 1.25rem; // 20px
    font-weight: 700; 
    background-image: url(${Search});
    background-repeat: no-repeat;
    background-position: 95% 50%;

    &::placeholder {
        color: #c2c2c2;
    }

    &:focus {
        outline: solid 2px #A445ED;
    }
`;
