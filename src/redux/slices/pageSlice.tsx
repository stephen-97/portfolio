
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import Page from "../../utility/page";

export const pageSlice = createSlice({
    name: 'button',
    initialState: {name: "presentation"},
    reducers: {
        setPage: (state, action) => state = action.payload
    }
})

export const pageSliceWhileScrolling = createSlice({
    name: 'pageSlice',
    initialState: {name: "presentation"},
    reducers: {
        setPageSliceScroll: (state, action) => state = action.payload
    }
})

export const scrollSlice = createSlice({
    name: 'scrolling',
    initialState: {name: "working"},
    reducers: {
        setPage: (state, action) => state = action.payload
    }
})