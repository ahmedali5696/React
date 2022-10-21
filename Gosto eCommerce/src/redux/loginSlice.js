import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: false,
    userName: null,
    logingError: null
  },
  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn = !state.isLoggedIn
      state.userName = action.payload
    },
    logOut: (state, action) => {
      state.isLoggedIn = !state.isLoggedIn
      state.userName = null
    }
  }
})

export const { logIn, logOut } = loginSlice.actions

export default loginSlice.reducer