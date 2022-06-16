import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import "./Footer.scss"
import { addListener } from '@reduxjs/toolkit'
const Footertest = () => {
    const [sent,setSent] = useState(false)
    const [text,setText] = useState("")

    const handleSend = async() =>{
        setSent(true)
        try {
            await axios.post('https://product-hit.herokuapp.com/api/v1/emailNotifications/signUp',{
                text:"Cảm ơn bạn dã đăng kí",    
            })
        }
        catch(error){
            console.log(error);
        }
    }
  return (
    <div className='footer mx-auto grid grid-cols-12'>
        <div className="footer_content mr-2 col-span-4">
            <h2 className='font-bold flex  '>Thông tin liên hệ</h2>
            <p className='flex'>Công ty cổ phần HIT Sport là một công ty cổ dông thuộc sở hữu của HIT Club với vai trò là nhà cung cấp các phụ kiện thời trang thể thao đến với khách hàng khắp mọi miền tổ quốc </p>
            <div className="footer_content-contact ">
                <div className="mb-3">
                    <i class="fa-solid fa-location-dot mr-7 "></i>
                    <span>Địa Chỉ: </span>
                </div>
                <div className=" mb-3">
                    <i class="fa-solid fa-phone mr-6  "></i>
                    <span>Điện Thoại:</span>
                </div>
                <div className="mb-3">
                    <i class="fa-solid fa-envelope mr-6 "></i>
                    <span>Email: </span>
                </div>
            </div>
        </div>
        <div className="footer_content mr-4  col-span-2">
            <h2 className='font-bold '>Chính Sách</h2>
            <ul>
                <li className='mb-2'><a href="">Hướng dẫn mua hàng</a></li>
                <li className='mb-2'><a href="">Chính sách thanh toán</a></li>
                <li className='mb-2'><a href="">Chính sách bảo hành</a></li>
                <li className='mb-2'><a href="">Chính sách vận chuyển</a></li>
            </ul>
        </div>
        <div className="footer_content mr-4 col-span-2">
            <h2 className='font-bold '>Thông tin</h2>
            <ul>
                <li className='mb-2'><a href="">Về chúng tôi</a></li>
                <li className='mb-2'><a href="">Câu hỏi thường gặp</a></li>
                <li className='mb-2'><a href="">Tin tức</a></li>
                <li className='mb-2'><a href="">Liên Hệ</a></li>
            </ul>
        </div>
        <div className="footer_content mr-4  col-span-4">
            <h2 className=' font-bold '>Đăng kí nhận tin</h2>
            <p>Gửi email đăng kí để nhận thông báo mới nhất về khuyến mãi, sự kiện nổi bật dành cho khách hàng</p>
            <form className="footer_content-email" onSubmit={handleSend}>
                <input  type="text" placeholder='Nhập email' onChange={ (e) => setText(e.targer.value)} />
                <button type='submit'>Đăng kí</button> 
            </form>
            <div className="footer_content-social">
                <a href="" className='text-sky-500'>
                    <i className="fa-brands fa-facebook-square  m-3 cursor-pointer"></i>
                </a>
                <a href="">
                    <i className="fa-brands fa-instagram m-3 cursor-pointer"></i>
                </a>
                <a href="" className='text-rose-600'>
                    <i className="fa-brands fa-youtube m-3 cursor-pointer"></i>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footertest 