import { createSlice } from "@reduxjs/toolkit";
import { searchProducts } from "./fetchers";



const searchSlice = createSlice({
  name: 'search',
  initialState: { 
    products: [],
    isLoading: false,
    error: null
  },
  extraReducers: {
    [searchProducts.pending]: (state, action) => {
      state.isLoading = true
    },
    [searchProducts.fulfilled]: (state, action) => {
      const data = action.payload

      state.isLoading = false
      state.products = data
    },
    [searchProducts.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

// export const { toggleItemFavorite } = searchSlice.actions

export default searchSlice.reducer