import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  price: 0,
  error: '',
  isLoading: false,
  isOrdered: false,
}

const countPrice = (items) => {
  let sum = items
    .map((e) => e.discount_price)
    .reduce((sum, cur) => sum + +cur, 0)
  return Math.round(sum * 100) / 100
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (
        state.cartItems.filter((e) => e.id !== action.payload.id).length ===
        state.cartItems.length
      ) {
        state.cartItems.push(action.payload)
      } else {
        state.cartItems = state.cartItems.filter(
          (e) => e.id !== action.payload.id,
        )
      }
      state.price = countPrice(state.cartItems)
      state.isOrdered = false
    },
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter((e) => e.id !== action.payload)
      state.price = countPrice(state.cartItems)
    },
    cartItemsPostingSuccess: (state) => {
      state.isLoading = false
    },
    cartItemsPosting: (state) => {
      state.isLoading = true
      state.error = ''
      state.cartItems = []
      state.price = 0
      state.isOrdered = true
    },
    cartItemsPostingError: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const { addToCart, removeCartItem, removeAllCartItems } =
  cartSlice.actions

export default cartSlice.reducer
