import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./headerPageAdmin.scss";

const headerPageAdmin = () => {
  const adminFake = {
    nameAdmin: "Nguyễn Văn Thọ",
    urlImg:
      "https://allimages.sgp1.digitaloceanspaces.com/photographercomvn/2020/09/1601227486_Bo-anh-Girl-xinh-hoc-sinh-cap-3-dep-nhuc.jpg",
  };

  return (
    <div className="header__page-admin">
      <div className="header-left">
        <FontAwesomeIcon className="icon-bars" icon={faBars} />
        <p>Danh mục quản lý</p>
      </div>
      <div className="header-right">
        <span>{adminFake.nameAdmin}</span>
        <div>
          <img src={adminFake.urlImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default headerPageAdmin;
