import axios from "axios";
import { getCartUserSuccess } from "../CartItem/CartItemSlice"


export const getCartFromUSer = async (id,dispatch)=>{
    try {
        const res = await axios.get(`https://test-sp-hit.herokuapp.com/api/v1/carts/${id}`)
        dispatch(getCartUserSuccess(res.data))
    } catch (error) {
        console.log(error);
    }

}

export const getVoucherFromUSer = async (id,dispatch)=>{
    try {
        const res = await axios.get(`https://test-sp-hit.herokuapp.com/api/v1/vouchers/${id}`)
        dispatch(getCartUserSuccess(res.data))
    } catch (error) {
        console.log(error);
    }

}

