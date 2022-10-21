import { createAsyncThunk } from "@reduxjs/toolkit";

const searchValidation = /^[A-Za-z]/

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      const allProducts = await fetch('https://dummyjson.com/products')
      const data = await allProducts.json()
      return data.products.slice(-16)

    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const searchProducts = createAsyncThunk(
  'search/searchProducts',
  async (product, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      if(searchValidation.test(product)){
        const allProducts = await fetch(`https://dummyjson.com/products/search?q=${product}`)
        const data = await allProducts.json()
        return data.products
      } else {
        return []
      }

    } catch (error) {
      return rejectWithValue(error)
    }
  }
)