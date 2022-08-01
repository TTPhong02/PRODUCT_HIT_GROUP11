import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const dataUser = createSlice({
    name : "user",
    initialState: {
        users:{
            allUser : null,
        }
    }, 
    reducers :{
        getUserSuccess : (state,action)=>{
            state.users.allUser = action.payload
        }
    }
})

export const {
    getUserSuccess,
} = dataUser.actions;

export default dataUser.reducer