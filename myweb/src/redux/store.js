import { configureStore } from "@reduxjs/toolkit";
import CartItemSlice from "./CartItem/CartItemSlice";
const store = configureStore({
    reducer: {
        productItems : CartItemSlice,
        cartItems : CartItemSlice
    }
})
export default store