import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  myComposition: [],
  price: 0,
  discount_price: 0,
}

export const selfMadeSlice = createSlice({
  name: 'selfMade',
  initialState,
  reducers: {
    addToSelfMade: (state, action) => {
      const isNew =
        state.myComposition.filter((e) => e !== action.payload.id).length ===
        state.myComposition.length
      if (isNew) {
        state.myComposition.push(action.payload.id)
        state.price = state.price + action.payload.price
        state.discount_price =
          state.discount_price + action.payload.discount_price
      } else {
        state.myComposition = state.myComposition.filter(
          (e) => e !== action.payload.id,
        )
        state.price = state.price - action.payload.price
        state.discount_price =
          state.discount_price - action.payload.discount_price
      }
    },
  },
})

export const { addToSelfMade } = selfMadeSlice.actions

export default selfMadeSlice.reducer
