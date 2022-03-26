import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { api } from 'helpers/api'

interface SignInData {
  email: string
  password: string
  remember: boolean
}

export const signIn = createAsyncThunk(
  'signIn',
  async (data: SignInData, thunkApi) => {
    const url = '/login'

    try {
      const response = await api().post(url, data)

      return { ...response.data, remember: data.remember }
    } catch (err: any) {
      if (!err.response) {
        throw err
      }

      return thunkApi.rejectWithValue(err.response.data)
    }
  },
)

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
  name: 'signIn',
  initialState,
  reducers: {
    signOut: (state) => {
      localStorage.removeItem('user')

      state.data = {}
    },
    updateName: (state, action) => {
      state.data.name = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true
        state.loaded = false
        state.error = ''
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.data = action.payload

        if (action.payload.remember) {
          localStorage.user = JSON.stringify(action.payload)
        }

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

export const { signOut, updateName } = signInSlice.actions

export default signInSlice.reducer
