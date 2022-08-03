import { createSlice } from "@reduxjs/toolkit";

const dataUser = createSlice({
    name: "user",
    initialState:{
        usersData:{
            inforUsers: null
        }
    },
    reducers:{
        getUserSuccess: (state,action)=>{
            state.usersData.inforUsers = action.payload
        }
    }
})
export const {
    getUserSuccess
} = dataUser.actions

export default dataUser.reducer