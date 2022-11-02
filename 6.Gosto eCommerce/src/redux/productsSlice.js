import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./fetchers";



const productsSlice = createSlice({
  name: 'products',
  initialState: { 
    products: [],
    isLoading: false,
    error: null
  },
  reducers: {
    toggleItemFavorite: (state, action) => {
      const targetItem = state.products.find(item => item.id === action.payload.id)
      targetItem.isFavorite = !targetItem.isFavorite
    }
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.isLoading = true
    },
    [getProducts.fulfilled]: (state, action) => {
      const data = action.payload

      state.isLoading = false
      state.products = data.map(item => ({...item, isFavorite: false}))
    },
    [getProducts.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export const { toggleItemFavorite } = productsSlice.actions

export default productsSlice.reducer