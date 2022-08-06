import React, { useState, useEffect } from "react";
import axios from "axios";
import "./promotion.scss";
import Product from "../../components/Product";
import { NavLink } from "react-router-dom";

const Promotion = () => {
  const listMenu = [
    {
      id: 1,
      link: "/promotion",
      title: "Sản phẩm khuyến mãi",
    },
    {
      id: 2,
      link: "/promotion",
      title: "Vourcher giảm giá",
    },
  ];

  let active = {
    color: "#fff",
    backgroundColor: "#ED1D24",
    display: "block",
  };
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `https://test-sp-hit.herokuapp.com/api/v1/products`
      );
      setProducts(res.data);
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
          <div className="list-product-filtered grid grid-cols-4 gap-y-30px gap-30">
            {products ? (
              products.map((item) => (
                <Product
                  key={item.id.toString()}
                  src={item.images[0].imageUrl}
                  name={item.title}
                  price={item.priceCurrent}
                  sale={item.isSale}
                  slug={item.slug}
                />
              ))
            ) : (
              <h1 className="loading">Loading...</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
