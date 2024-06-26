

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
};

export const cartSlice = createSlice({
   name: "itemsCart",
   initialState,
   reducers: {
        addOne: (state, action) => {
            const { id, name, price } = action.payload; 
            const itemIndex = state.cart.findIndex(obj => obj.id === id);

            if (itemIndex !== -1) {
                state.cart[itemIndex].quantity++;
            } else {
                state.cart.push({ id, name, price, quantity: 1 }); 
            }
        },

        removeOne: (state, action) => {
            const { id } = action.payload;
            const itemIndex = state.cart.findIndex(obj => obj.id === id);

            if (itemIndex !== -1) {
                if (state.cart[itemIndex].quantity === 1) {
                    state.cart = state.cart.filter(obj => obj.id !== id);
                } else {
                    state.cart[itemIndex].quantity--;
                }
            }
        },

        removeAll: (state) => {
            state.cart = [];
        }
   }
});

export const { addOne, removeOne, removeAll } = cartSlice.actions;

export default cartSlice.reducer;
