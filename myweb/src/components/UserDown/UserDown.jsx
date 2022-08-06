import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./UserDown.scss";
export const UserDown = () => {

  const user = localStorage.getItem("accessToken")

  const logOut = () =>{
    localStorage.removeItem("accessToken")
    localStorage.removeItem("account")
    localStorage.removeItem("cartItems")
    window.location.reload()
    alert("Bạn đã đăng xuất !! ")
  }
  return (
    <ul className="down">
      <li className="down_cart">
        <Link to={"/cart"}>Giỏ hàng của tôi</Link>
      </li>
      <li className="down_voucher">
        <Link to={"/myvoucher"}>Voucher của tôi</Link>
      </li>
      {
        user == null ?
        (
          <li className="down_signin">
          <Link to={"/signIn"}>Đăng Nhập</Link>
          </li> 
        ):(
          <li className="down_manage">
            <Link to={"/profile"}>Quản lý tài khoản</Link>
          </li>
        )
      }
      <li className="down_signout">
        <Link to={"/"} onClick={()=> logOut()}>Đăng xuất</Link>
      </li>
    </ul>
  );
};
