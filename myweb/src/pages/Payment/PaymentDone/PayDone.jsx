import './PayDone.scss'
import React, { useEffect,useState  } from 'react'
import productData from '../../../assets/fakedata/product'
import { ProductInCart } from '../../../components/ProductInCart/Index'
import { useSelector } from 'react-redux'
import numberWithCommas from '../../../utils/numberWithCommas'

export const PayDone = () => {
    const cartItems = useSelector(state=> state.cartItems.carts.cart)

    const [productInCart,setProductInCart] = useState([])

    const [totalPrice, setTotalPrice ] = useState(0) 

    const [totalPriceAfterVoucher,setTotalPriceAfterVoucher]= useState(0)

    const [priceVoucher,setPriceVoucher]= useState(0)

    const date = new Date();

    useEffect(()=>{
        setProductInCart(cartItems)
        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.amount) * (Number(item.product.priceOld))), 0))
    },[cartItems])

    useEffect(()=>{
        setPriceVoucher((Number(totalPrice)*5/100))
        setTotalPriceAfterVoucher(Number(totalPrice) - Number(priceVoucher))
    })

  return ( 
    <div className='done'>
        <div className="done_title">
            <h1>THÔNG TIN ĐƠN HÀNG</h1>
        </div>
        <div className="done_content">
            <div className="done_content_name">
                <h2>Chi tiết đơn hàng</h2>
            </div>
            <div className="done_content_main grid grid-cols-12">
                <div className="done_content_main_product col-span-6">
                    <div className="done_content_main_product_head">
                        <h2>Sản phẩm</h2>
                        <h2>Tổng</h2>
                    </div>
                    <div className="done_content_main_product_infor">
                        {
                            productInCart.map((item,index)=>(
                                <ProductInCart 
                                item={item}
                                key={index}
                                />
                            ))
                        }
                    </div>
                    <div className="done_content_main_product_priceadd">
                        <h3>Tổng số phụ: </h3>
                        <p>{numberWithCommas(priceVoucher)} VND</p>
                    </div>
                    <div className="done_content_main_product_typepay">
                        <h3>Phương thức thanh toán: </h3>
                        <p>Thanh toán khi nhận hàng</p>
                    </div>
                    <div className="done_content_main_product_sumprice">
                        <h3>Tổng thanh toán: </h3>
                        <p>{numberWithCommas(totalPriceAfterVoucher)} VND</p>
                    </div>
                </div>
                <div className="done_content_main_bill col-span-6">
                    <div className="done_content_main_bill_text">
                        <h1>Cảm ơn bạn. Đơn hàng của bạn đã được nhận</h1>
                    </div>
                    <div className="done_content_main_bill_list">
                        <div className="done_content_main_bill_list_id">
                           <h2>Mã đơn hàng: </h2> 
                           <p>1234</p>
                        </div>
                        <div className="done_content_main_bill_list_date">
                            <h2>Ngày: </h2>
                            <p>{date.getDate() + " Tháng " + Number(date.getMonth()+1) + " Năm "+ date.getFullYear()}</p>
                        </div>
                        <div className="done_content_main_bill_list_price">
                            <h2>Tổng cộng :  </h2>
                            <p>{numberWithCommas(totalPriceAfterVoucher)} VND</p>
                        </div>
                        <div className="done_content_main_bill_list_typepay">
                            <h2>Phương thức thanh toán:  </h2>
                            <p>Thanh toán khi nhận hàng</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
