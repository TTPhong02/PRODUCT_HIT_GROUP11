import { createSlice } from "@reduxjs/toolkit"
import { useEffect,useState } from "react"
import axios from "axios"
import { getCartFromUSer } from "../apiRequest/apiRequest"


const initialState = {
    value: []
}
export const cartItemSlice = createSlice({
    name: 'cartItems',
    initialState
    // {
    //     // carts:{
    //     //     cart: []
    //     // }
    // }
    ,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload

            const duplicate = findItem(state.value, newItem)

            if(duplicate.length > 0) {
                state.value = delItem(state.value, newItem)

                state.value = [...state.value, {
                    ...newItem,
                    id: duplicate[0].id,
                    amount : newItem.amount + duplicate[0].amount
                }]
            // axios.post(`https://test-sp-hit.herokuapp.com/api/v1/cart-items/user/${JSON.parse(localStorage.getItem("account")).id}/add/${state.carts.cart.id}`)
            // axios.post(`https://test-sp-hit.herokuapp.com/api/v1/cart-items/${state.carts.cart.id}?amount=${state.carts.cart.amount}`)
            } else {
                state.value = [...state.value, {
                    ...newItem,
                    id: state.value.length > 0 ? state.value[state.value.length - 1].id + 1 : 1
                }]
                // axios.post(`https://test-sp-hit.herokuapp.com/api/v1/cart-items/user/${JSON.parse(localStorage.getItem("account")).id}/add/${state.carts.cart.id}`)
            }
        },
        updateItem: (state, action) => {
            const itemUpdate = action.payload

            const item = findItem(state.value, itemUpdate)

            if(item.length > 0) {
                state.value = delItem(state.value, itemUpdate)

                state.value = [...state.value, {
                    ...itemUpdate,
                    id: item[0].id
                }]
                state.value = sortItems(state.value)
            } 
            // axios.post(`https://test-sp-hit.herokuapp.com/api/v1/cart-items/${state.carts.cart.id}amount=${state.carts.cart.amount}`)
        },
        removeItem: (state, action) => {
            const removeItem = action.payload

            state.value = delItem(state.value, removeItem)

            state.value = sortItems(state.value) 
        },

        // getCartUserSuccess : (state,action)=>{
        //     state.carts.cart = action.payload
        // },
        // changeMount:(state,action)=>{
        //     const itemUpdate = action.payload
        //     c
        // }
    }
})

const findItem = (arr, item) => arr.filter(e => e.slug === item.slug && e.color === item.color && e.size === item.size)
// const findItem = (arr, item) => arr.filter(e => e.id === item.id )

const delItem = (arr, item) => arr.filter(e => e.slug !== item.slug || e.color !== item.color || e.size !== item.size)
// const delItem = (arr, item) => arr.filter(e => e.id !== item.id )

const sortItems = arr => arr.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))

export const { addItem, updateItem, removeItem, getCartUserSuccess } = cartItemSlice.actions

export default cartItemSlice.reducer