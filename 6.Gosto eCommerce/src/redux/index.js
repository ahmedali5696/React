import { configureStore } from "@reduxjs/toolkit"
import login from "./loginSlice"
import products from "./productsSlice"
import cart from "./cartSlice"
import favorite from "./favoriteSlice"
import search from "./searchSlice"

export default configureStore({
  reducer: { login, products, cart, favorite, search }
})
