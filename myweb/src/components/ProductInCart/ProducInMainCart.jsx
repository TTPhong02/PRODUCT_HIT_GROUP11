import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../redux/CartItem/CartItemSlice'
import './ProductInMainCart.scss'
export const ProducInMainCart = (props) => {
    const dispatch = useDispatch()
    const [item,setItem] = useState(props.item)
    const [quantity, setQuantity] = useState(0)
    useEffect(() => {
        setItem(props.item)
        setQuantity(props.item.quantity)
    }, [props.item])
    const updateQuantity = (option) =>{
        if(option === '+'){
            dispatch(updateQuantity({...item, quantity: quantity+1}))
        }
        if(option ==='-'){
            dispatch(updateQuantity({...item , quantity:quantity-1 === 0 ? 1 : quantity -1 }))
        }
    }
    const deleteItem = () => {
        dispatch(removeItem(item))
        alert('Da xoa san pham !');
    }
  return (
    <div className="productmain grid grid-cols-12 ">
        <div className="productmain_infor col-span-6">
            <div className="producrmain_infor_remove " onClick={()=> deleteItem()}>
                <i className="fa-solid fa-trash-can-xmark"></i>
            </div>
            <div className="productmain_infor_image">
                <img src={item.src} alt={item.name} />
            </div>
            <div className="productmain_infor_about">
                <h3>{item.name}</h3>
                <p>Màu: {item.color}</p>
                <p>Size: {item.size}</p>
            </div>
        </div>
        <div className="productmain_price col-span-2">
            <p>{item.price}</p>
        </div>
        <div className="productmain_quantity col-span-2">
            <button onClick={() => updateQuantity('-')} className='px-2 py-1 mr-1 bg-slate-400'>-</button>
            <span>{quantity}</span>
            <button onClick={() => updateQuantity('+')}  className='px-1 py-1 ml-1 bg-slate-400'>+</button>
        </div>
        <div className="productmain_sumprice col-span-2">
            <p>{item.price}</p>
        </div>
    </div>
  )
}


