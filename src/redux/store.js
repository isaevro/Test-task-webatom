import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cartSlice'
import itemsReducer from './reducers/itemsSlice'
import selfMadeReducer from './reducers/selfMadeSlice'

export default configureStore({
  reducer: {
    cart: cartReducer,
    items: itemsReducer,
    selfMade: selfMadeReducer,
  },
})
