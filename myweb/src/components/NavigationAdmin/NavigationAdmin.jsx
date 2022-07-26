import React from "react";
import "./navigationAdmin.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

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
  const [active, setActive] = useState(1);
  return (
    <div className="nav-admin">
      <ul className="list-menu">
        {listMenu.map((item) => (
          <li
            key={item.id}
            className={`item-menu ${active === item.id && "active"}`}
            onClick={() => setActive(item.id)}
          >
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationAdmin;
