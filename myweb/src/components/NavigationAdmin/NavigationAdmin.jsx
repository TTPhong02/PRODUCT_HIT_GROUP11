import React from "react";
import "./navigationAdmin.scss";
import { NavLink } from "react-router-dom";

const NavigationAdmin = () => {
  const listMenu = [
    {
      id: 1,
      link: "/admin/product",
      title: "Quản lý sản phẩm",
    },

    {
      id: 2,
      link: "/admin/account",
      title: "Quản lý tài khoản",
    },

    {
      id: 3,
      link: "/admin/event",
      title: "Thông báo, sự kiện",
    },

    {
      id: 4,
      link: "/admin/voucher",
      title: "Voucher khuyến mãi",
    },
  ];
  let active = {
    color: "#fff",
    backgroundColor: "#ED1D24",
    display: "block",
  };
  return (
    <div className="nav-admin">
      <ul className="list-menu">
        {listMenu.map((item) => (
          <li key={item.id} className={`item-menu`}>
            <NavLink
              to={item.link}
              style={({ isActive }) => (isActive ? active : undefined)}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationAdmin;
