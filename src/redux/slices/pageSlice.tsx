import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export const pageSlice = createSlice({
    name: 'button',
    initialState: {name: "presentation"},
    reducers: {
        setPage: (state, action) => state = action.payload
    }
})
