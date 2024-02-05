import { configureStore } from '@reduxjs/toolkit'
import keyValueSlice from "../common/keyValueSlice"

export const store = configureStore({
  reducer: {
    keyValue: keyValueSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
