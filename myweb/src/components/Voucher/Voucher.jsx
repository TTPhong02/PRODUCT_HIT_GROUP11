import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import voucher from '../../assets/fakedata/voucher.js'
import './Voucher.scss'
import date from '../../utils/date.js'
import { useDispatch, useSelector } from 'react-redux'
import { deleteVoucher, getAllVoucher } from '../../redux/apiRequest/apiRequest.js'
import voucherData from '../../assets/fakedata/voucher.js'
export const Voucher = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        getAllVoucher(dispatch)
    },[])

    const user = useSelector(state => state.auth.login.data?.roleList?.id)

    const voucherItems = useSelector(state => state.voucherItems.vouchers.voucher.data)

    console.log(voucherItems);

    const handleUse = (id) =>{
        dispatch(deleteVoucher(id,dispatch))
    }
    
    // const [voucherList, setVoucherList] = useState([])
    // console.log(voucherList);

    // useEffect(()=>{
    //     setVoucherList(voucherData.getVoucherItemsInfo(voucherItems))
    // },[voucherItems])
    // const fetchVoucher = async()=>{
    //     try{
    //         const res = await axios.get(
    //             `https://test-sp-hit.herokuapp.com/api/v1/vouchers`
    //         );
    //         setVouchers(res.data)
    //     }catch(err){
    //         console.log(err);
    //     }
    // }
  return (
    <div className="voucher">
        <div className="voucher_title">
            <h1>Mã Giảm Giá</h1>
        </div>
        <div className="voucher_item">
            {
                voucherItems ?
                voucherItems.map((item)=>(
                    <li className='grid grid-cols-5 py-4'>
                        <div className="voucher_item_image col-span-1">
                            <img src={item.urlImage} alt={item.description} />
                        </div>
                        <div className="voucher_item_infor col-span-3">
                            <p className='voucher_item_infor_name'>{item.description}</p>
                            <p className='voucher_item_infor_date'>HSD: {date(item.expirationTime)}</p>
                        </div>
                        <div className="voucher_item_btn col-span-1 ">
                            <button onClick={()=>handleUse(item.id)}>Dùng</button>
                        </div>
                        
                    </li>
                ))
                :(
                    <h1>Loading...</h1>
                )
                
            }
        </div>
        
    </div>
  )
}
