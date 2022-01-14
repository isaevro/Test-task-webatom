import axios from 'axios'
import { itemsSlice } from './itemsSlice'
import { cartSlice } from './cartSlice'

export const fetchItems = () => async (dispatch) => {
  try {
    dispatch(itemsSlice.actions.itemsFetching())
    const salads = await axios
      .get('http://test-job.webatom.ru/salads')
      .then((res) => res.data.result)
    const molecules = await axios
      .get('http://test-job.webatom.ru/molecules')
      .then((res) => res.data.result)
    dispatch(itemsSlice.actions.itemsFetchingSuccess({ salads, molecules }))
  } catch (err) {
    dispatch(itemsSlice.actions.itemsFetchingError(err.message))
  }
}

export const postingCartItems = () => async (dispatch, getState) => {
  try {
    const postItem = getState().cart.cartItems
    dispatch(cartSlice.actions.cartItemsPosting())
    const res = await axios.post('http://test-job.webatom.ru/order', {
      order: postItem,
    })
    if (res.data.success) {
      dispatch(cartSlice.actions.cartItemsPostingSuccess())
    } else {
      throw new Error('Неуспешный запрос на покупку')
    }
  } catch (err) {
    dispatch(cartSlice.actions.cartItemsPostingError(err.message))
  }
}
