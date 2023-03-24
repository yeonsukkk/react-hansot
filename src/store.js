import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import product from './json/product.json'

export const fetchAllProduct = createAsyncThunk('fetch-all-product', async(apiUrl) => {
    // console.log(apiUrl)
    const response = await fetch(apiUrl)
    return response.json()
})

let productData = createSlice({
    name: 'productData',
    initialState: {data: [], fetchStatus: ''},
    reducers: {
        open: (state, action) => {
            console.log(1)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllProduct.fulfilled, (state, action) => {
            state.data = action.payload
            state.fetchStatus = '성공'
        })
        .addCase(fetchAllProduct.pending, (state) => {
            state.fetchStatus = '진행중'
        })
        .addCase(fetchAllProduct.rejected, (state) => {
            state.fetchStatus = '실패'
            state.data = product
        })
    }
})

export default configureStore({
    reducer: {
        productData: productData.reducer
    }
})