import React from "react";
import "./productManagement.scss";
import HeaderPageAdmin from "../../../components/HeaderPageAdmin/HeaderPageAdmin";
import NavigationAdmin from "../../../components/NavigationAdmin/NavigationAdmin";

import TableProducts from "./TableProducts";

const ProductManagement = () => {
  return (
    <div className="container-admin">
      <HeaderPageAdmin />
      <div className="main-section">
        <NavigationAdmin />
        <TableProducts />
      </div>
    </div>
  );
};

export default ProductManagement;
