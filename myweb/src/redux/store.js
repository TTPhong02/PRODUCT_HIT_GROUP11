import { configureStore } from "@reduxjs/toolkit";
import CartItemSlice from "./CartItem/CartItemSlice";
import ProductSlice from "./ProductSlice/ProductSlice";
import VoucherSlice from "./VoucherSlice/VoucherSlice";
const store = configureStore({
    reducer: {
        productItems : ProductSlice,
        cartItems : CartItemSlice,
        voucherItems: VoucherSlice
    }
})
export default store