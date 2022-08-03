import axios from "axios";
import { getCartUserSuccess } from "../CartItem/CartItemSlice"
import { getUserSuccess } from "../UserSlice/dataUser";
import { getVoucherSuccess } from "../VoucherSlice/VoucherSlice";


export const getCartFromUSer = async (dispatch)=>{
    const cartUser = JSON.parse(localStorage.getItem("account"))
    dispatch(getCartUserSuccess(cartUser.cartItems))
    console.log(cartUser.cartItems);
}

export const getVoucherFromUSer = async (id,dispatch)=>{
    try {
        const res = await axios.get(`https://test-sp-hit.herokuapp.com/api/v1/vouchers/${id}`)
        dispatch(getVoucherSuccess(res.data))
    } catch (error) {
        console.log(error);
    }

}

export const getAllUser = async (dispatch)=>{
    try{
        const res = await axios.get( `https://test-sp-hit.herokuapp.com/api/v1/users/token?token=${localStorage.getItem("accessToken")}`,{
        });
        dispatch(getUserSuccess(res.data))
        // localStorage.removeItem("account")
        localStorage.setItem("account",JSON.stringify(res.data))
    }catch(err){
        console.log(err);
    }
}

export const getAllVoucher = async (dispatch)=>{
    try{
        const res = await axios.get( 'https://test-sp-hit.herokuapp.com/api/v1/vouchers',{
        });
        console.log(res);
        dispatch(getVoucherSuccess(res))
    }catch(err){
        console.log(err);
    }
}



