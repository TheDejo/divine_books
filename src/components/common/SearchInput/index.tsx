import React from 'react'
import styled from 'styled-components'
import icons from '@components/icons'
import { useState } from 'react'
import useDebouncedCallback from '@/components/hooks/useDebounceCallback'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { fetchBooks } from '@/redux/slices/bookSlice'
import EmptyState from '../EmptyState'
import constant from './constants'
import configConstants from '@config/constants'

const { SCREEN_TEXT } = constant
const {
  MISC: { routes }
} = configConstants

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
  height: 400px;
  width: 300px;
  border-radius: 10px;
  padding: 10px;
  background-color: #f5efe5;
  overflow-y: hidden;

  h5 {
    margin: 0;
    max-width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const SearchIcon = styled.div`
  position: absolute;
  top: 18px;
  left: 20px;
`
const BooksContainer = styled.div`
  overflow-y: scroll;
  height: 100%;
`
const BooksWrapper = styled.div`
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Book = styled.a`
  text-decoration: none;
  padding: 10px;
  width: 280px;
  color: #121212;
  cursor: pointer;
  height: 70px;
  background: transparent;
  display: flex;
  justify-content: start;
  background: #d0c4b8;
  border-radius: 8px;
  border: none;
`

const Cover = styled.div`
  height: 50px;
  width: 30px;
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
`

const Text = styled.p`
  margin: 0;
  width: 100%;
  font-size: 10px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const TextBox = styled.div`
  max-width: 150px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 10px;
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
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useAppDispatch()
  const { loading, books } = useAppSelector((state) => state.book)

  const debouncedSearch = useDebouncedCallback((searchTerm: string) => {
    dispatch(fetchBooks(searchTerm))
  }, 500)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
    debouncedSearch(event.target.value)
  }

  const RenderBooks = () => {
    if (loading) return <EmptyState state='loading' />
    if (books?.docs.length === 0) return <EmptyState />
    return (
      <BooksContainer>
        <BooksWrapper>
          {books.docs.slice(0, 20).map((book, idx) => (
            <Book key={idx.toString()} target='_blank' href={`${routes.amazon.replace('%amazonid%', book?.title as string)}`}>
              <Cover
                style={{
                  backgroundImage: `url(${routes.image.replace('%cover%', book?.cover_i as string)})`
                }}
              />
              <TextBox>
                <h5>{book?.title}</h5>
                <Text>
                  {SCREEN_TEXT.author} {book?.author_name}
                </Text>
                <Text>
                  {SCREEN_TEXT.publishYear} {book?.publish_year?.[0] || '_'}
                </Text>
                <Text>
                  {SCREEN_TEXT.publisher} {book?.publisher?.[0] || '_'}
                </Text>
              </TextBox>
            </Book>
          ))}
        </BooksWrapper>
      </BooksContainer>
    )
  }

  return (
    <SearchWrapper>
      <SearchIcon>{icons.SearchIcon()}</SearchIcon>
      <Search type='search' placeholder='Search for books' value={searchTerm} onChange={handleSearch} className='rounded-search-input' />
      {searchTerm && (
        <DebounceContent>
          <RenderBooks />{' '}
        </DebounceContent>
      )}
    </SearchWrapper>
  )
}

export default SearchInput
