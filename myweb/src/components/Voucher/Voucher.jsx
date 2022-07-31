import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import voucher from '../../assets/fakedata/voucher.js'
import './Voucher.scss'
import date from '../../utils/date.js'
export const Voucher = () => {
    const [vouchers,setVouchers] = useState([])

    const fetchVoucher = async()=>{
        try{
            const res = await axios.get(
                `https://test-sp-hit.herokuapp.com/api/v1/vouchers`
            );
            setVouchers(res.data)
        }catch(err){
            console.log(err);
        }
    }

    useEffect( () => {
        fetchVoucher()
    },[])
    // const vouchers = voucher.getAllVoucher()
  return (
    <div className="voucher">
        <div className="voucher_title">
            <h1>Mã Giảm Giá</h1>
        </div>
        <div className="voucher_item">
            {
                vouchers.map((item)=>(
                    <li className='grid grid-cols-5 py-4'>
                        <div className="voucher_item_image col-span-1">
                            <img src={item.src} alt={item.description} />
                        </div>
                        <div className="voucher_item_infor col-span-3">
                            <p className='voucher_item_infor_name'>{item.description}</p>
                            <p className='voucher_item_infor_date'>HSD: {date(item.expirationTime)}</p>
                        </div>
                        <div className="voucher_item_btn col-span-1 ">
                            <button>Dùng</button>
                        </div>
                        
                    </li>
                ))
            }
        </div>
        
    </div>
  )
}
