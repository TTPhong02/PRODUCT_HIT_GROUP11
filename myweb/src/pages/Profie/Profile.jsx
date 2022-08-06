import React from 'react'
import "./Profile.scss"
import date from '../../utils/date'
const Profile = () => {
    const user = JSON.parse(localStorage.getItem("account"))
    console.log(user);
  return (
    <div className="profile">
        <div className="profile_header">
            <h1>Thông tin cá nhân</h1>
        </div>
        <div className="profile_content">
            {
                user  ? (
                    <>
                    <h1>Tên Tài Khoản: {user.username}</h1>
                    <h1>Tên : {user.lastName +" "+ user.firstName}</h1>
                    <h1>Giới tính: {user.gender}</h1>
                    <h1>Email: {user.email}</h1>
                    <h1>Số điện thoại:{user.phone} </h1>
                    <h1>Quyền: {user.roles[0].name}</h1>
                    <h1>Ngày đăng kí : {date(user.updatedDate)}</h1>
                    </>
                ):(
                    <h2>Vui lòng đăng nhập</h2>
                )

            }
            
            
        </div>
    </div>
  )
}

export default Profile