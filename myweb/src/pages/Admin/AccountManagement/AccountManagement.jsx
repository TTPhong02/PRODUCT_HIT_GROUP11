import React from "react";
import "./accountManagement.scss";
import HeaderPageAdmin from "../../../components/HeaderPageAdmin/HeaderPageAdmin";
import NavigationAdmin from "../../../components/NavigationAdmin/NavigationAdmin";
const AccountManagement = () => {
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

export default AccountManagement;
