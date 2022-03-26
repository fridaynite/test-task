import { configureStore } from '@reduxjs/toolkit'

import signIn from 'features/login/slice'

const store = configureStore({
  reducer: {
    signIn,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store
