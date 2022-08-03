import { configureStore } from "@reduxjs/toolkit";
import CartItemSlice from "./CartItem/CartItemSlice";
import ProductSlice from "./ProductSlice/ProductSlice";
import VoucherSlice from "./VoucherSlice/VoucherSlice";
import authSlice from "./UserSlice/authSlice";
import dataUser from "./UserSlice/dataUser";
const store = configureStore({
    reducer: {
        auth: authSlice,
        user: dataUser,
        productItems : ProductSlice,
        cartItems : CartItemSlice,
        voucherItems: VoucherSlice,
    }
})
export default store