import { createSlice } from "@reduxjs/toolkit"
import { useEffect,useState } from "react"
import axios from "axios"

// const items = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : []
// const [cart,setCart] = useState([])

// const fetchCart = async () =>{
//     try {
//       const res = await axios.get(
//         'https://test-sp-hit.herokuapp.com/api/v1/detail-bills'
//       );
//       setCart(res.data);
//     }catch(err){
//       console.log(err);
//     }
// }
// useEffect(()=>{
//     fetchCart()
// },[]);

const initialState = {
    value: []
}
// console.log(initialState.value.length)
export const cartItemSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload

            const duplicate = findItem(state.value, newItem)

            if(duplicate.length > 0) {
                state.value = delItem(state.value, newItem)

                state.value = [...state.value, {
                    ...newItem,
                    id: duplicate[0].id,
                    quantity: newItem.quantity + duplicate[0].quantity
                }]
            } else {
                state.value = [...state.value, {
                    ...newItem,
                    id: state.value.length > 0 ? state.value[state.value.length - 1].id + 1 : 1
                }]
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

        },
        removeItem: (state, action) => {
            const removeItem = action.payload

            state.value = delItem(state.value, removeItem)

            state.value = sortItems(state.value)
        }
    }
})

const findItem = (arr, item) => arr.filter(e => e.slug === item.slug && e.color === item.color && e.size === item.size)

const delItem = (arr, item) => arr.filter(e => e.slug !== item.slug || e.color !== item.color || e.size !== item.size)

const sortItems = arr => arr.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))

export const { addItem, updateItem, removeItem } = cartItemSlice.actions

export default cartItemSlice.reducer