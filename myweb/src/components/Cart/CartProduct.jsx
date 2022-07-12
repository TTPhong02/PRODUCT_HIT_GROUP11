import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { ProductInCart } from '../ProductInCart/Index'
import { CartMain } from '../../pages/CartMain/CartMain';
import './Cart.scss'
import productData from '../../assets/fakedata/product';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export const CartProduct  = () => {
  const cartItems = useSelector(state => state.cartItems.value)
  const [productInCart,setProductInCart] = useState([])
  const [ totalPrice, setTotalPrice ] = useState(0) 
  
  // const [check,setCheck] = useState(false)
  useEffect(()=>{
    setProductInCart(productData.getCartItemsInfo(cartItems))
    setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * (Number(item.price))), 0))
  },[cartItems])
  // const test = () =>{
  //   if(productInCart.length > 0 )
  //     setCheck(true)
  //   else {
  //     setCheck(false)
  //   }
  // }
  return (
    <div className="cart">
        <div className="cart_title">
            <h1>GIỎ HÀNG</h1>
        </div>
        <div className="cart_product">
          {
            cartItems.length > 0 ?(
              productInCart.map( (item,index) =>(
                <ProductInCart
                item={item}
                key={index}
                />
              ))
            ):(
              <h2 className='text-2xl text-center'>Chưa có sản phẩm nào !</h2>
            ) 
          }
        </div>
        <div className="cart_price">
          <h2 className='my-5'>Tạm Tính : {totalPrice} VND</h2>
        </div>
        <div className="cart_button">
          <Link to={'/cart'}>
            <button className='cart_button-showcart'>
              XEM GIỎ HÀNG
            </button>
          </Link>
            <button className='cart_button-bill'>THANH TOÁN</button>
        </div>
    </div>
  )
} 
