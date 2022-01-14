import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  salads: [],
  molecules: [],
  isLoading: false,
  error: '',
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    itemsFetchingSuccess: (state, action) => {
      state.isLoading = false
      state.error = ''
      state.salads = action.payload.salads
      state.molecules = action.payload.molecules
    },
    itemsFetching: (state) => {
      state.isLoading = true
    },
    itemsFetchingError: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default itemsSlice.reducer
