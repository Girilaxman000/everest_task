
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Router from "next/router";

import { AppState } from "./store";


const initialState = {
    cartItems: []
};

export const slice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: { 
        setItem: (state, action) => {
            const existingIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
              );
            if(existingIndex >= 0){
               state.cartItems.push()
            } else{
                state.cartItems.push(action.payload)
            }
        },
    },
})

export const {
    setItem
} = slice.actions


export const getItem = (state) => state.auth.cartItems

export default slice.reducer