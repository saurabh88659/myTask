import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/reducers/auth.reducer'

export const store = configureStore({
    reducer: {
        auth: authReducer
    },
})