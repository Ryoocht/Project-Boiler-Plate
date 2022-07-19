import { configureStore } from '@reduxjs/toolkit'
import { api } from './api'
import userReducer from '../features/user/userSlice'
import snackbarReducer from '../features/snackbar/snackbarSlice'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    users: userReducer,
    snackbar: snackbarReducer, 
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(api.middleware)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>