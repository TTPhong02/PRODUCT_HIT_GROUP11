import React from "react";
import "./Header.scss";
import "./Responsive.scss";
import { Link } from "react-router-dom";
import Search from "../search/Search";
import { UserDown } from "../UserDown/UserDown";
import { CartProduct } from "../Cart/CartProduct";
const Header = () => {
  return (
    <div className=" header grid grid-cols-12 items-center justify-between mx-auto ">
      <ul className=" header_menu col-span-6  ">
        <li className="header_menu-nav">
          <Link to={"/"}>Trang Chủ</Link>
        </li>
        <li className="header_menu-nav">
          <Link to={"/"}>
            Sản Phẩm
            <i class="fa-solid fa-angle-down"></i>
          </Link>
          <ul className="header_menu-nav_down">
            <li>
              <Link to={"/"}>Boots</Link>
            </li>
            <li>
              <Link to={"/"}>Cao Gót</Link>
            </li>
            <li>
              <Link to={"/"}>Giày Da</Link>
            </li>
            <li>
              <Link to={"/"}>Giày Thể Thao</Link>
            </li>
            <li>
              <Link to={"/"}>Sneaker</Link>
            </li>
            <li>
              <Link to={"/"}>Giày Bệt</Link>
            </li>
          </ul>
        </li>
        <li className="header_menu-nav">
          <Link to={"/"}>Khuyến Mãi</Link>
        </li>
        <li className="header_menu-nav">
          <Link to={"/"}>Tin Tức</Link>
        </li>
        <li className="header_menu-nav">
          <Link to={"/contact"}>Liên Hệ</Link>
        </li>
      </ul>
      <div className="col-span-2 header_logo">
        <div className="header_logo-image">
          <Link to={"/"}>
            <img
              src="https://hithaui.com/static/images/logoHIT.png"
              alt="anh"
            />
          </Link>
        </div>
      </div>
      <div className="col-span-9 header_option col-start-12">
        <div className="header_option-item border-r border-zinc-400">
          <i class="fa-solid fa-magnifying-glass"></i>
          <div className="header_option-item_hoversearch">
            <Search />
          </div>
        </div>
        <div className="header_option-item relative border-r border-zinc-400">
          <Link to={"/cart"}>
            <i class="fa-solid fa-cart-shopping"></i>
            <div className="header_option-item_hovercart">
              <CartProduct />
            </div>
          </Link>
        </div>

        <div className="header_option-item relative ">
          <i class="fa-solid fa-user"></i>
          <div className="header_option-item_down absolute">
            <UserDown />
          </div>
        </div>
      </div>
      <div className="col-span-3 header_list">
        <div className="header_list-icon">
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
