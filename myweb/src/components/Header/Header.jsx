import React from 'react';
import './Header.scss'
import './Responsive.scss';
import { Link } from 'react-router-dom';
import Search from '../search/Search'
import { UserDown } from '../UserDown/UserDown';
import { CartProduct } from '../Cart/CartProduct';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Header = () => {

    const dataUsers = JSON.parse(localStorage.getItem("account"))

    const [quantity,setQuantity] = useState('')

    const productInCart = useSelector(state => state.cartItems.carts.cart)


    useEffect(()=>{
        setQuantity(productInCart.length)
    },[productInCart])

  return (
    <div className=' header grid grid-cols-12 items-center justify-between mx-auto '>
        <ul className=' header_menu col-span-6  '>
            <li className='header_menu-nav' >
                <Link to={ '/'}>
                    Trang Chủ
                </Link>
            </li>
            <li className='header_menu-nav'>
                <Link to={'/products'}>
                    Sản Phẩm 
                    <i className="fa-solid fa-angle-down"></i>
                </Link>
                <ul className='header_menu-nav_down'>
                    <li><Link to={'/products'}>Boots</Link></li>
                    <li><Link to={'/products'}>Cao Gót</Link></li>
                    <li><Link to={'/products'}>Giày Da</Link></li>
                    <li><Link to={'/products'}>Giày Thể Thao</Link></li>
                    <li><Link to={'/products'}>Sneaker</Link></li>
                    <li><Link to={'/products'}>Giày Bệt</Link></li>
                </ul>
            </li>
            <li className='header_menu-nav'>
                <Link to={'/promotion'}>Khuyến Mãi</Link>
            </li>
            <li className='header_menu-nav'>
                <Link to={'/news'}>Tin Tức</Link>
            </li>
            <li className='header_menu-nav'>
                <Link to={'/contact'}>Liên Hệ</Link>
            </li>
        </ul>
        <div className="col-span-2 header_logo">
            <div className="header_logo-image">
                <Link to={'/'}>
                    <img src={require('../../assets/image/logo.png')} alt="anh" />
                </Link>
            </div>
        </div>
        <div className="col-span-9 header_option col-start-12">
            <div className="header_option-item border-r border-zinc-400">
                <i className="fa-solid fa-magnifying-glass"></i>
                <div className="header_option-item_hoversearch">
                    <Search/>
                </div>
            </div>
            <div className="header_option-item relative border-r border-zinc-400">  
                <Link to={'/cart'}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    { quantity === 0 ? '' : <span className='header_option-item_sumcart'>{quantity}</span> }
                    <div className="header_option-item_hovercart">
                        <CartProduct/>
                    </div>
                </Link>
            </div>
            
            <div className="header_option-item relative flex">
                    {dataUsers === null ? <i className="fa-solid fa-user"></i> : <span className='text-2xl text-red-500 font-semibold'>Hi, {dataUsers.username}</span>}
                <div className="header_option-item_down absolute">
                    <UserDown/>
                </div>
            </div>
        </div>
        <div className="col-span-3 header_list">
            <div className="header_list-icon">
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
    </div>
  )
}

export default Header