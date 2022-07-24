import './Payment.scss'
import React from 'react'
import { ProductInCart } from '../../../components/ProductInCart/Index'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import productData from '../../../assets/fakedata/product'
import numberWithCommas from '../../../utils/numberWithCommas.js'

export const Payment = () => {
    const cartItems = useSelector(state=> state.cartItems.value)
    const[productInCart,setProductInCart] = useState([])
    const [ totalPrice, setTotalPrice ] = useState(0) 
    const [totalPriceAfterVoucher,setTotalPriceAfterVoucher]= useState(0)
    const [priceVoucher,setPriceVoucher]= useState(0)
    const [typePay,setTypePay]= useState('')
    useEffect(()=>{
        setProductInCart(productData.getCartItemsInfo(cartItems))
        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * (Number(item.price))), 0))
        setPriceVoucher((Number(totalPrice)*5/100))
        setTotalPriceAfterVoucher(Number(totalPrice)- Number(priceVoucher))
    })

    return(
        <div className='pay'>
            <div className="pay_title">
                <h1>THANH TOÁN</h1>
            </div>
            <div className="pay_content grid grid-cols-12">
                <div className="pay_content_infor col-span-7">
                    <div className="pay_content_infor_title">
                        <h2>THÔNG TIN THANH TOÁN</h2>
                    </div>
                    <div className="pay_content_infor_form">
                        <div className="pay_content_infor_form_name">
                            <p>Họ tên </p>
                            <input type="text" className='p-3 border-2 w-full rounded-lg'  />
                        </div>
                        <div className="pay_content_infor_form_phone">
                            <p>Số điện thoại</p>
                            <input type="text" className='p-3 border-2 w-full rounded-lg' />
                        </div>
                        <div className="pay_content_infor_form_email">
                            <p>Địa chỉ Email</p>
                            <input type="text" className='p-3 border-2 w-full rounded-lg' />
                        </div>
                        <div className="pay_content_infor_form_address">
                            <p>Địa chỉ nhận hàng</p>
                            <input type="text" className='p-3 border-2 w-full rounded-lg' />
                        </div>
                    </div>
                    <div className="pay_content_infor_bonus">
                        <div className="pay_content_infor_bonus_title">
                            <h1>THÔNG TIN BỔ SUNG</h1>
                        </div>
                        <div className="pay_content_infor_bonus_note">
                            <p>Ghi chú đơn hàng</p>
                            <textarea type="text" placeholder='Ghi chú đơn hàng, ví dụ: Thời gian, địa điểm nhận hàng chi tiết hơn'className='p-4 border-2 w-full text-2xl h-44 rounded-lg' />
                        </div>
                    </div>

                </div>
                <div className="pay_content_cart col-span-5">
                    <div className="pay_content_cart_title">
                        <h1>ĐƠN HÀNG CỦA BẠN</h1>
                    </div>
                    <div className="pay_content_cart_product">
                        <div className="pay_content_cart_product_head">
                            <h2>Sản phẩm</h2>
                            <h2>Tổng</h2>
                        </div>
                        <div className="pay_content_cart_product_main">
                            {
                                productInCart.map((item,index)=>(
                                    <ProductInCart item = {item} key={index}/>
                                ))
                            }
                        </div> 
                        <div className="pay_content_cart_product_pricevoucher">
                            <p>Ưu đãi</p>
                            <p className='text-red-500'>-{numberWithCommas(priceVoucher)} VND</p>
                        </div>
                        <div className="pay_content_cart_product_priceafter">
                            <p>Tổng</p>
                            <p className='text-red-500'>{numberWithCommas(totalPriceAfterVoucher)} VND</p>
                        </div>
                    </div>
                    <div className="pay_content_cart_typepay">
                        <div className="pay_content_cart_typepay_bank">
                            <form>

                                <input type='radio' id='bank' value={'bank'} name='pay' onClick={(e)=>setTypePay(e.target.value)} />
                                <label htmlFor="bank">Chuyển khoản ngân hàng</label>
                                <p className='border-b border-gray-400 py-2 text-xl mb-5'>Thực hiện thanh toán vào ngay tài khoản của chúng tôi. Vui lòng sử dụng mã đơn hàng của bạn trong phần nội dung thanh toán. Đơn hàng sẽ được giao sau khi tiền đã chuyển</p>
                                <input type="radio" id='money' name='pay'/>
                                <label htmlFor="money">Thanh toán khi nhận hàng</label>
                            </form>
                        </div>
                    
                            
                        
                    </div>
                    <div className="pay_content_cart_buttonpay">
                        <Link to={'/paysuccess'}>
                            <button>Đặt Hàng</button>
                        </Link>
                        <p>Dữ liệu cá nhân của bạn sẽ được sử dụng để xử lý đơn đặt hàng, hỗ trợ trai nghiệm của bạn trên toàn bộ trang web này và cho các mục đích khác được mô tả trong chính sách riêng của chúng tôi</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
