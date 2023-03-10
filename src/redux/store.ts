import { configureStore } from '@reduxjs/toolkit'
import BookReducer from './slices/bookSlice'

export const store = configureStore({
  reducer: {
    book: BookReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
