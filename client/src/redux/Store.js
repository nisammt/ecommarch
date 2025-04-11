import { configureStore, createReducer } from '@reduxjs/toolkit'
import userReducer from '../redux/features/UserSlice'
import adminReducer from '../redux/features/adminSlice'
import cartReducer from '../redux/features/cartSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    admin: adminReducer,
    cart: cartReducer,
    
  },
})