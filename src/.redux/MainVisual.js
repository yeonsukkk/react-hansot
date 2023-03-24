import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import MainVisual from '../json/mainVisual.json';

// 통신
export const fetchAllproduct = createAsyncThunk('fetch-all-products', async (apiUrl) => {
    // console.log(apiUrl)
    const response = await fetch(apiUrl)
    return response.json()
})

const mainVisualData = createSlice({
    name: 'mainVisual',
    initialState: {data: [], fetchStatus: ''},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllproduct.fulfilled, (state, action) => {
            state.data = action.payload
            state.fetchStatus = '성공'
            // console.log(state.fetchStatus)
        })
        .addCase(fetchAllproduct.pending, (state) => {
            state.fetchStatus = '진행중'
            // console.log(state.fetchStatus)
        })
        .addCase(fetchAllproduct.rejected, (state) => {
            state.fetchStatus = '실패'
            state.data = MainVisual;
            // console.log(state.fetchStatus)
        })
    }
})

export default mainVisualData;