import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import constant from '@/config/constants'

interface FetchBooksResult {
  numFound: number
  start: number
  numFoundExact: boolean
  docs: any[]
  num_found: number
  q: string
  offset: number | null
}

const {
  API: { routes }
} = constant

export const fetchBooks = createAsyncThunk<FetchBooksResult, string, any>(routes.asyncKey, (searchTerm) => {
  return fetch(`${routes.searchBooks}=${searchTerm}`).then((res) => res.json())
})

interface BookState {
  books: FetchBooksResult
  loading: boolean
}

const initialState: BookState = {
  books: {
    numFound: 0,
    start: 0,
    numFoundExact: true,
    docs: [],
    num_found: 0,
    q: '',
    offset: null
  },
  loading: false
}

const bookSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false
        state.books = action.payload
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.loading = false
      })
  },
  reducers: {}
})

export default bookSlice.reducer
