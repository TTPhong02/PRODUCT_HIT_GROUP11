import { configureStore } from "@reduxjs/toolkit";
import CartItemSlice from "./CartItem/CartItemSlice";
import ProductSlice from "./ProductSlice/ProductSlice";
const store = configureStore({
    reducer: {
        productItems : ProductSlice,
        cartItems : CartItemSlice
    }
})
export default store