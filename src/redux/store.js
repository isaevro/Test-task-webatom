import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cartSlice'
import itemsReducer from './reducers/itemsSlice'

export default configureStore({
  reducer: {
    cart: cartReducer,
    items: itemsReducer,
  },
})
