import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favoriteItems: []
  },
  reducers: {
    addRemoveFavorite: (state, action) => {
      const newItem = action.payload
      const existItem = state.favoriteItems.find(item => item.id === newItem.id)

      if (existItem) {
        state.favoriteItems = state.favoriteItems.filter(item => item.id !== existItem.id)
      } else {
        state.favoriteItems.push(newItem)
      }
    }
  }
})

export const { addRemoveFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer