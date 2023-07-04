
import { createSlice } from '@reduxjs/toolkit'

export const pageSlice = createSlice({
    name: 'button',
    initialState: {name: "working"},
    reducers: {
        setPage: (state, action) => state = action.payload
    }
})