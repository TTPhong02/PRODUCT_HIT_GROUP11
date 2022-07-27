import React from "react";
import "./accountManagement.scss";
import HeaderPageAdmin from "../../../components/HeaderPageAdmin/HeaderPageAdmin";
import NavigationAdmin from "../../../components/NavigationAdmin/NavigationAdmin";
const AccountManagement = () => {
  const active = "/admin/account";
  return (
    <div className="container-admin">
      <HeaderPageAdmin />
      <div className="main-section">
        <NavigationAdmin active={active} />
        <div
          style={{ margin: "auto", fontSize: "30px" }}
          className="content-admin"
        >
          Thêm sửa xóa sản tài khoản
        </div>
      </div>
    </div>
  );
};

export default AccountManagement;
