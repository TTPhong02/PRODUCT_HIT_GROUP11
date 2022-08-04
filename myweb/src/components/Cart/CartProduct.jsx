import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { ProductInCart } from '../ProductInCart/Index'
import { CartMain } from '../../pages/CartMain/CartMain';
import './Cart.scss'
import productData from '../../assets/fakedata/product';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import numberWithCommas from '../../utils/numberWithCommas'

export const CartProduct  = () => {
  const cartItems = useSelector(state => state.cartItems.carts.cart) 

  const [productInCart,setProductInCart] = useState([])

  const [ totalPrice, setTotalPrice ] = useState(0) 

  const navigate = useNavigate()

  const check =()=>{
    if(cartItems.length > 0){
        navigate('/payment')
    }else 
    {
        alert('Bạn chưa có sản phẩm nào trong giỏ hàng !')
        navigate('./')
    }
}

  useEffect(()=>{
    setProductInCart(cartItems)
    setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.amount) * (Number(item.product.priceOld))), 0) )
  },[cartItems]);

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
        <div className="cart_price flex justify-center items-center">
          <h1 className='my-6 px-2'>Tạm Tính :</h1>
          <p className='text-red-600'>{numberWithCommas(totalPrice)} VND</p>
        </div>
        <div className="cart_button">
          <Link to={'/cart'}>
            <button className='cart_button-showcart'>
              XEM GIỎ HÀNG
            </button>
          </Link>
            <button className='cart_button-bill' onClick={()=>check()}>THANH TOÁN</button>
        </div>
    </div>
  )
} 
