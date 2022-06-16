import React from 'react'
import { Link } from 'react-router-dom'
import './UserDown.scss'
export const UserDown = () => {
  return (
    <ul className="down">
        <li className="down_manage">
            <Link to={'/'}>Quản lý tài khoản</Link>
        </li>
        <li className="down_cart">
            <Link to={'/cart'}>
                Giỏ hàng của tôi
            </Link>
        </li>
        <li className="down_voucher">
            <Link to={'/myvoucher'}>Voucher của tôi</Link>
        </li>
        <li className="down_signout">
            <Link to={'/'}>Đăng xuất</Link>
        </li>
    </ul>
  )
}
