import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: { 
    items: [],
    totalQuantity: 0
   },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload,
            existItem = state.items.find(item => item.id === newItem.id)

      state.totalQuantity++
      if (!existItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
          total: newItem.price
        })
      } else {
        existItem.quantity++
        existItem.total = existItem.total + newItem.price
      }
    },

    removeFromCart(state, action) {
      const currentItem = action.payload
      const existItem = state.items.find(item => item.id === currentItem.id)

      state.totalQuantity--
      if (existItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== currentItem.id)
      } else {
        existItem.quantity--
        existItem.total = existItem.total - currentItem.price
      }
    }
  }
})

export const cartActions = cartSlice.actions
export default cartSlice;