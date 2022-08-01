import { configureStore } from "@reduxjs/toolkit";
import CartItemSlice from "./CartItem/CartItemSlice";
import ProductSlice from "./ProductSlice/ProductSlice";
import VoucherSlice from "./VoucherSlice/VoucherSlice";
import authReducer from "./UserSlice/authSlice";
import dataUser from "./UserSlice/dataUser";
const store = configureStore({
    reducer: {
        auth: authReducer,
        user: dataUser,
        productItems : ProductSlice,
        cartItems : CartItemSlice,
        voucherItems: VoucherSlice,
    }
})
export default store