
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Router from "next/router";

import { AppState } from "./store";


const initialState = {
    name: '',
};

export const slice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: { 
        setName: (state, action) => {
            state.name = action.payload
        },
    },
})

export const {
   setName
} = slice.actions


export const getName = (state) => state.auth.name

export default slice.reducer