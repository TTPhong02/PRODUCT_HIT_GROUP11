import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { ProductInCart } from '../ProductInCart/Index'
import { CartMain } from '../../pages/CartMain/CartMain';
import './Cart.scss'
import productData from '../../assets/fakedata/product';
import { Link } from 'react-router-dom';
export const CartProduct  = () => {
  const productInCart = productData.getAllProducts()
  return (
    <div className="cart">
        <div className="cart_title">
            <h1>GIỎ HÀNG</h1>
        </div>
        <div className="cart_product">
          {
            productInCart.map( (item,index) =>(
                <ProductInCart
                item={item}
                key = {index}
                />
            ))

          }
        </div>
        <div className="cart_price">
          <h2 className='my-5'>Tạm Tính : </h2>
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
