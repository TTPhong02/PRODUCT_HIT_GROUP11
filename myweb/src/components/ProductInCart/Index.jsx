import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './ProductInCart.scss'
import numberWithCommas from '../../utils/numberWithCommas'

export const ProductInCart = (props) => {
    const [item,setItem]= useState(props.item)
    useEffect(()=>{
        setItem(props.item)
    })

  return (
    <div className="product">
        <div className="product_image">
            <img src={item.product.images[0].imageUrl} alt="" />
        </div>
        <div className="product_infor">
            <p className='product_infor-name pr-2 pb-2'>{item.title}</p>
            <p className='product_infor-color pr-2 pb-2'>Màu Sắc : {item.product.colr}</p>
            <p className='product_infor-size pr-2 pb-2'>Kích Cỡ: {item.product.size}</p>
            <div className="product_infor-sumprice flex pb-5">
                <p className='pr-2 '>{item.amount} x </p>
                <p className='pr-2 - text-red-500 font-bold'>{item.product.priceOld} VND</p>
            </div>
        </div>
    </div>
  )
}
