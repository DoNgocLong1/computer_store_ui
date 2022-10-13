import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./ShoppingCart/CartSlice";
console.log(cartReducer)
export const store = configureStore({
    reducer : {
        cart: cartReducer
    }
})
