import { configureStore } from '@reduxjs/toolkit'

import signIn from 'features/login/slice'

export default configureStore({
  reducer: {
    signIn,
  },
})
