import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import authReducer from '../features/auth/authSlice'
import productReducer from '../features/product/productSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    product: productReducer
  }
})
