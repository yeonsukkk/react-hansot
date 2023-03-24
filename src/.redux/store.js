import { configureStore } from '@reduxjs/toolkit'
import mainVisualData from './MainVisual'
import newsData from './News'

let store = configureStore({
    reducer: {
        mainVisual: mainVisualData.reducer,
        news: newsData.reducer
    }
})


export default store;