import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import NewsData from '../json/newsData.json'

//통신
export const fetchAllproduct = createAsyncThunk('fetch-all-products', async (apiUrl) => {
    const response = await fetch(apiUrl)
    return response.json()
})

const newsData = createSlice({
    name: 'newsData',
    initialState: {data: [], fetchStatus: ''},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllproduct.fulfilled, (state, action) => {
            state.data = action.payload
            state.fetchStatus = '성공'
            console.log(state.data)
        })
        .addCase(fetchAllproduct.pending, (state) => {
            state.fetchStatus = '진행중'
            //console.log(state.data)
            // console.log(state.fetchStatus, state.data)
        })
        .addCase(fetchAllproduct.rejected, (state) => {
            state.fetchStatus = '실패'
            state.data = NewsData;
            //console.log(state.data)
            // console.log(state.fetchStatus, state.data)
        })
    }
})

export default newsData;