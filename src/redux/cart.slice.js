
import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
};

export const slice = createSlice({
    name: "cart",
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

export const getItem = (state) => state.cart.cartItems

export default slice.reducer