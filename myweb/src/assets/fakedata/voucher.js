import { useEffect } from "react"
import VoucherSlice from "../../redux/VoucherSlice/VoucherSlice"
import axios from "axios"


const voucher = [
    {
        id:'1',
        src: 'https://i.pinimg.com/564x/a8/90/8f/a8908fdd0a31cba8c07e29c2fe929bdb.jpg',
        name: 'Giảm 5% tổng hóa đơn với mọi sản phẩm',
        date: '12-18/6/2022',
        sale: '5%'
    },
    {
        id:'2',
        src: 'https://i.pinimg.com/564x/a8/90/8f/a8908fdd0a31cba8c07e29c2fe929bdb.jpg',
        name: 'Giảm 5% tổng hóa đơn với mọi sản phẩm',
        date: '12-18/6/2022',
        sale: '5%'
    },
    {
        id:'3',
        src: 'https://i.pinimg.com/564x/a8/90/8f/a8908fdd0a31cba8c07e29c2fe929bdb.jpg',
        name: 'Giảm 5% tổng hóa đơn với mọi sản phẩm',
        date: '12-18/6/2022',
        sale: '5%'
    },
    {
        id:'4',
        src: 'https://i.pinimg.com/564x/a8/90/8f/a8908fdd0a31cba8c07e29c2fe929bdb.jpg',
        name: 'Giảm 5% tổng hóa đơn với mọi sản phẩm',
        date: '12-18/6/2022',
        sale: '5%'
    }
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