import React from 'react'
import styled from 'styled-components'
import icons from '@components/icons'
import { useState } from 'react'
import logger from '@logger'

const SearchWrapper = styled.div`
  position: relative;
  input::placeholder {
    color: #8c7b72;
    font-weight: 600;
    font-size: 10px;
  }
`

const DebounceContent = styled.div`
  position: absolute;
  height: 300px;
  width: 300px;
  border-radius: 10px;
  padding: 10px;
  background-color: #f5efe5;
`

const SearchIcon = styled.div`
  position: absolute;
  top: 18px;
  left: 20px;
`

const Search = styled.input`
  border-radius: 200px;
  background-color: #f5efe5;
  border: none;
  height: 40px;
  width: 300px;
  padding: 10px 20px 10px 40px;
  margin: 8px;

  &:focus-visible {
    outline: 1px solid #8c7b72;
  }
`

const SearchInput = () => {
  const [search, setSearch] = useState('')
  return (
    <SearchWrapper>
      <SearchIcon>{icons.SearchIcon()}</SearchIcon>
      <Search
        type='search'
        placeholder='Search for books'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='rounded-search-input'
      />
      {search && <DebounceContent>hello</DebounceContent>}
    </SearchWrapper>
  )
}

export default SearchInput
