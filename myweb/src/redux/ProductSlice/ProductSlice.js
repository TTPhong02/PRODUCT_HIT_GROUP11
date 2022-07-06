import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value : null
}

const ProductSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers:{
        set: (state , action) =>{
            state.value = action.payload
        },
        remove : (state) =>{
            state.value = null
        }
    }
})

export const{  set, remove }  = ProductSlice.actions

export default ProductSlice.reducer