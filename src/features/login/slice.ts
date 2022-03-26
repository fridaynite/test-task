import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { api } from 'helpers/api'

export const signIn = createAsyncThunk('signIn', async (data: object) => {
  const url = '/login'

  const response = await api().post(url, data)

  return response.data
})

interface SignInState {
  loaded: boolean
  loading: boolean
  error?: any
  data?: any
}

const initialState = {
  loading: false,
  loaded: false,
  error: '',
  data: localStorage.user ? JSON.parse(localStorage.user) : {},
} as SignInState

const signInSlice = createSlice({
  name: 'loan-score',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true
        state.loaded = false
        state.error = {}
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.data = action.payload

        localStorage.user = JSON.stringify(action.payload)

        state.loading = false
        state.loaded = true
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
        state.loaded = true
      })
  },
})

export default signInSlice.reducer
