import axios from "axios";
import { loginStart,loginSuccess } from "./authSlice";

export const dataUser = async (user,dispatch) =>{
    const check = (username, listUsername) =>{
        
    }
    try {
        const data = await axios.get(`https://test-sp-hit.herokuapp.com/api/v1/users`)

        const res = localStorage.get('username')


    } catch (error) {
        console.log(error);
    }
}