import React from 'react'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import productData from '../../assets/fakedata/product';
import { ProductInCart } from '../../components/ProductInCart/Index';
import { ProducInMainCart } from '../../components/ProductInCart/ProducInMainCart';
import './CartMain.scss';
import { Link,useNavigate } from 'react-router-dom';
import { Voucher } from '../../components/Voucher/Voucher';
import voucherData from '../../assets/fakedata/voucher';
import numberWithCommas from '../../utils/numberWithCommas'
import axios from 'axios';
export const CartMain = () => {
    // const product = productData.getAllProducts()

    const cartItems = useSelector(state => state.cartItems.value) 

    const voucherItems = useSelector(state => state.voucherItems.value)

    const [ cartProducts, setCartProducts ] = useState([])

    const [ totalPrice, setTotalPrice ] = useState(0) 

    const [vouchers,setVouchers] = useState([])

    const navigate = useNavigate()

    const fetchProductMainCart = async() =>{
        try{
            const res = await axios.get(
                `https://test-sp-hit.herokuapp.com/api/v1/carts`
            )
            setCartProducts(res.data)
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        setCartProducts(productData.getCartItemsInfo(cartItems))

        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * (Number(item.price))), 0))

    }, [cartItems])


    useEffect(() =>{
        setVouchers(voucherData.getAllVoucher(voucherItems))
    },[voucherItems])

    const check =()=>{
        if(cartItems.length > 0){
            navigate('/payment')
        }else 
        {
            alert('Bạn chưa có sản phẩm nào trong giỏ hàng !')
            navigate('./')
        }
    }

  return (
    <div className="cartmain grid grid-cols-12">
        <div className="cartmain_title col-span-12">

            <h1>GIỎ HÀNG</h1>
        </div>
        <div className="cartmain_product col-span-7">
            <div className="cartmain_product_title grid grid-cols-12 ">
                <h2 className=' col-span-6 mr-1'>Sản Phẩm</h2>
                <h2 className=' col-span-2 mr-1'>Giá</h2>
                <h2 className='col-span-2 mr-2'>Số Lượng</h2>
                <h2 className='col-span-2 mr-1'>Tổng</h2>
            </div>
            {
                cartItems.length> 0?(

                    cartProducts.map( (item,index) =>(
                        <ProducInMainCart 
                        item={item}
                        key = {index}
                        />
                    ))
                ):(
                    <h2 className='text-2xl text-center p-16'>Chưa có sản phẩm nào !</h2>
                )
                
            }
            <Link to={'/'}>
                <button className="cartmain_product_back">
                    <i className="fa-solid fa-arrow-left"></i>
                    Tiếp tục xem Sản Phẩm
                </button> 
            </Link>
            <button className="cartmain_product_update">
                Cập Nhật Giỏ Hàng
            </button>
        </div>
        <div className="cartmain_bill col-span-5">
            <div className="cartmain_bill_title">
                <h2>Cộng Giỏ Hàng</h2>
            </div>
            <div className="cartmain_bill_infor">
                <div className="cartmain_bill_infor_temp ">
                    <h3>Tạm Tính</h3>
                    <p>{numberWithCommas(totalPrice)} VND</p>
                </div>
                <div className="cartmain_bill_infor_sum">
                    <h3>Tổng</h3>
                    <p>{numberWithCommas(totalPrice)} VND</p>
                </div>
                <div className="cartmain_bill_infor_sale">
                    <h3>Ưu Đãi</h3>
                    <p>-5%</p>
                </div>
            </div>
            <div className="cartmain_bill_voucher">
                <i class="fa-solid fa-ticket "></i>
                Voucher Ưu Đãi
                <div className="cartmain_bill_voucher_item">
                    <Voucher/>
                </div>
            </div>
            <div className='cartmain_bill_pay'>
                <button className='cartmain_bill_pay_btn'  onClick={()=> check()}>
                    TIẾN HÀNH THANH TOÁN
                </button>
                
            </div>
        </div>
    </div>
  )
}
