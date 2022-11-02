import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartItemState: true },
  reducers: {
    toggle(state) {
      state.cartItemState = !state.cartItemState
    }
  }
})

export const uiActions = uiSlice.actions
export default uiSlice;