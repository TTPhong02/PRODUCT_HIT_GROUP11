import React from 'react'
import { useState } from 'react'
import './ProductInCart.scss'
let API_ULR = ''
export const ProductInCart = (props) => {
    const [item,setItem]= useState(props.item)
  return (
    <div className="product">
        <div className="product_image">
            <img src={props.item.src} alt="" />
        </div>
        <div className="product_infor">
            <p className='product_infor-name pr-2 pb-2'>{props.item.name}</p>
            <p className='product_infor-color pr-2 pb-2'>Màu Sắc : {props.item.color}</p>
            <p className='product_infor-size pr-2 pb-2'>Kích Cỡ: {props.item.size}</p>
            <div className="product_infor-sumprice flex pb-5">
                <p className='pr-2 '>{props.item.quantity} x </p>
                <p className='pr-2 - text-red-500 font-bold'>{props.item.price} đ</p>
            </div>
        </div>
    </div>
  )
}
