import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalCost: 0
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload
      const existItem = state.items.find(item => item.id === newItem.id)

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

      state.totalCost = state.totalCost + newItem.price
    },
    removeFromCart: (state, action) => {
      const newItem = action.payload
      const existItem = state.items.find(item => item.id === newItem.id)

      if (existItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== newItem.id)
      } else {
        existItem.quantity--
        existItem.total = existItem.total - newItem.price
      }

      state.totalCost = state.totalCost - newItem.price
    }
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer