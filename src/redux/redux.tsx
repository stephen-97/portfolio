import {configureStore} from '@reduxjs/toolkit'
import {pageSlice} from "./slices/pageSlice";

export const store = configureStore({
    reducer: {
        page: pageSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>