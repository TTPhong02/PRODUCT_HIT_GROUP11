import { useEffect } from "react"
import VoucherSlice from "../../redux/VoucherSlice/VoucherSlice"
import axios from "axios"


const voucher = [

]

// const fetchVoucher = async() =>{

//     try{
//         const res = await axios.get(
//             `https://test-sp-hit.herokuapp.com/api/v1/vouchers`
//         )
//         voucher.push(res.data)
//     }catch(err){
//         console.log(err);
//     }
// }



const getAllVoucher = () => voucher

const getVoucherById = (id) =>{
    voucher.find(e => e.id === id)
}

const getVoucherItemsInfo = (voucherItems) =>{
    let res = []
    if(voucherItems.length > 0){
        voucherItems.forEach(e => {
            let voucher = getVoucherById(e.id)
            res.push({
                ...e,
                voucher: voucher
            })
        });
    }
    return res
}

const voucherData = {
    getAllVoucher,
    getVoucherItemsInfo,
    getVoucherById
}
export default voucherData