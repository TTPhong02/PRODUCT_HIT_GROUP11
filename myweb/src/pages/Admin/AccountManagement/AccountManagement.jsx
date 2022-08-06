import React from "react";
import "./accountManagement.scss";
import HeaderPageAdmin from "../../../components/HeaderPageAdmin/HeaderPageAdmin";
import NavigationAdmin from "../../../components/NavigationAdmin/NavigationAdmin";
import TableAccount from "./TableAccount";
const AccountManagement = () => {
  const active = "/admin";
  return (
    <div className="container-admin">
      <HeaderPageAdmin />
      <div className="main-section">
        <NavigationAdmin active={active} />
        <TableAccount />
      </div>
    </div>
  );
};

export default AccountManagement;
