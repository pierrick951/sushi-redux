import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    totalPrice: 0
};

export const cartSlice = createSlice({
    name: "itemsCart",
    initialState,
    reducers: {
        addOne: (state, action) => {
            const { id, name, price } = action.payload;
            const existingItem = state.cart.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                const { name, price } = action.payload;
                state.cart.push({ id, name, price, quantity: 1 });
            }

            state.totalPrice = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        },

        removeOne: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.cart.find(item => item.id === id);

            if (existingItem) {
                if (existingItem.quantity === 1) {
                    state.cart = state.cart.filter(item => item.id !== id);
                } else {
                    existingItem.quantity--;
                }

                state.totalPrice = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
            }
        },

        removeAll: (state) => {
            state.cart = [];
            state.totalPrice = 0;
        },

        calculateTotalPrice: (state) => {
            state.totalPrice = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        }
    }
});

export const { addOne, removeOne, removeAll, calculateTotalPrice } = cartSlice.actions;

export default cartSlice.reducer;
