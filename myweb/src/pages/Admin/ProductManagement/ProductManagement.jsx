import React from "react";
import "./productManagement.scss";
import HeaderPageAdmin from "../../../components/HeaderPageAdmin/HeaderPageAdmin";
import NavigationAdmin from "../../../components/NavigationAdmin/NavigationAdmin";

const ProductManagement = () => {
  return (
    <div className="container-admin">
      <HeaderPageAdmin />
      <div className="main-section">
        <NavigationAdmin />
        <div className="content-admin"></div>
      </div>
    </div>
  );
};

export default ProductManagement;
