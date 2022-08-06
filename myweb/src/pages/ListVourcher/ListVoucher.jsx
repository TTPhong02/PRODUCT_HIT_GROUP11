import React, { useState, useEffect } from "react";
import "./listVourcher.scss";
import axios from "axios";
import Product from "../../components/Product";
import { NavLink } from "react-router-dom";
import date from "../../utils/date";

const ListVoucher = () => {
  const listMenu = [
    {
      id: 1,
      link: "/promotion",
      title: "Sản phẩm khuyến mãi",
    },
    {
      id: 2,
      link: "/listVoucher",
      title: "Voucher giảm giá",
    },
  ];

  let active = {
    color: "#fff",
    backgroundColor: "#ED1D24",
    display: "block",
  };
  const [voucher, setVoucher] = useState([]);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `https://test-sp-hit.herokuapp.com/api/v1/vouchers`
      );
      setVoucher(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div>
      <div className="container-promotion">
        <div className="nav-page">
          <div className="link-page">
            <p className="link-prev">Trang chủ /</p>
            <p className="link-current"> Cửa hàng</p>
          </div>
        </div>
        <div className="main-content">
          <ul className="nav-left">
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
          <ul className="list-product-filtered grid grid-cols-2 gap-y-30px gap-30">
            {voucher ? (
              voucher.map((item) => (
                <li className="grid grid-cols-5 py-4 col-span-1">
                  <div className="voucher_item_image col-span-1">
                    <img src={item.urlImage} alt={item.description} />
                  </div>
                  <div className="voucher_item_infor col-span-3">
                    <p className="voucher_item_infor_name">
                      {item.description}
                    </p>
                    <p className="voucher_item_infor_date">
                      HSD: {date(item.expirationTime)}
                    </p>
                  </div>
                  <div className="voucher_item_btn col-span-1 ">
                    <button>Nhận</button>
                  </div>
                </li>
              ))
            ) : (
              <h2>Loading...</h2>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListVoucher;
