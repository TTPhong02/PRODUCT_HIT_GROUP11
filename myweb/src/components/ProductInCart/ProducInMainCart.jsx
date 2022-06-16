import React from 'react'
import { useState } from 'react'
import './ProductInMainCart.scss'
export const ProducInMainCart = (props) => {
    const [item,setItem] = useState(props.item)
  return (
    <div className="productmain grid grid-cols-12 ">
        <div className="productmain_infor col-span-6">
            <div className="productmain_infor_image">
                <img src={props.item.src} alt={props.item.name} />
            </div>
            <div className="productmain_infor_about">
                <h3>{props.item.name}</h3>
                <p>Màu: {props.item.color}</p>
                <p>Size: {props.item.size}</p>
            </div>
        </div>
        <div className="productmain_price col-span-2">
            <p>{props.item.price}</p>
        </div>
        <div className="productmain_quantity col-span-2">
            <button className='px-2 py-1 mr-1 bg-slate-400'>-</button>
            <span>{props.item.quantity}</span>
            <button  className='px-1 py-1 ml-1 bg-slate-400'>+</button>
        </div>
        <div className="productmain_sumprice col-span-2">
            <p>{props.item.price}</p>
        </div>
    </div>
  )
}

