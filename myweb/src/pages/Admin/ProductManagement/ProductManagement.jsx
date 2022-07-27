import React from "react";
import "./productManagement.scss";
import HeaderPageAdmin from "../../../components/HeaderPageAdmin/HeaderPageAdmin";
import NavigationAdmin from "../../../components/NavigationAdmin/NavigationAdmin";

const ProductManagement = () => {
  const active = "/admin/product";
  return (
    <div className="container-admin">
      <HeaderPageAdmin />
      <div className="main-section">
        <NavigationAdmin active={active} />
        <div
          style={{ margin: "auto", fontSize: "30px" }}
          className="content-admin"
        >
          Thêm sửa xóa sản phẩm
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
