import React from 'react'
import voucher from '../../assets/fakedata/voucher.js'
import './Voucher.scss'
export const Voucher = () => {
    const vouchers = voucher.getAllVoucher()
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
                            <img src={item.src} alt={item.name} />
                        </div>
                        <div className="voucher_item_infor col-span-3">
                            <p className='voucher_item_infor_name'>{item.name}</p>
                            <p className='voucher_item_infor_date'>HSD: {item.date}</p>
                        </div>
                        <div className="voucher_item_btn col-span-1">
                            <button>Dùng</button>
                        </div>
                        
                    </li>
                ))
            }
        </div>
        
    </div>
  )
}
