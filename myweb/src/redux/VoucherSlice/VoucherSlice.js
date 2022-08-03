import { createSlice } from "@reduxjs/toolkit"


const voucherSlice = createSlice({
    name: 'voucherItems',
    initialState:{
      vouchers:{
        voucher: []
      }
    },
    reducers:{

      removeItem:(state,action)=>{
        const removeItem = action.payload

        state.value = delItem(state.value,removeItem)

        state.value = sortItems(state.value)
      },

      getVoucherSuccess: (state,action)=>{
        state.vouchers.voucher = action.payload
      }
    }
})

const findItem = (arr, item) => arr.filter(e => e.id === item.id )

const delItem = (arr, item) => arr.filter(e => e.id !== item.id )

const sortItems = arr => arr.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))

export const {removeItem,getVoucherSuccess} = voucherSlice.actions

export default voucherSlice.reducer