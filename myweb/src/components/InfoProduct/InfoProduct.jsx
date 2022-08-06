import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./infoProduct.scss";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/CartItem/CartItemSlice";
// import ProductReviews from "../ProductReviews/ProductReviews";

import numberWithCommas from "../../utils/numberWithCommas";
import axios from "axios";

const InfoProduct = ({ product }) => {

  const category = "sneaker";

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const [color, setColor] = useState("");

  const [size, setSize] = useState("");

  const [productFinds,setProductFinds] = useState() 
  const addToCart = () => {
    if (color === "" && size === "") {
      alert("Vui lòng màu và size");
    } else if (color === "") {
      alert("Vui lòng chọn màu");
    } else if (size === "") {
      alert("Vui lòng chọn size");
    } else {
      dispatch(
        addItem({
          // // id: product.id,
          // amount: quantity,
          // color: color,
          // size: size,
          // priceOld: product.priceCurrent,
          // imageUrl: product.images[0].imageUrl,
          // title: product.title,
          // slug: product.slug,
          productFinds
        })
      );
      alert("Đã thêm vào giỏ hàng!");
    }
  };

  const productFind = async() => {
    try {
      const res = await axios.post("")
      setProductFinds(res.data) 
    } catch (error) {
      console.log(error);
    }
  } 
  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };
  const handleColor = (color) => {
    setColor(color);
  };
  const handleSize = (size) => {
    setSize(size);
  };
  return (
    <div className="details-product">
      <div className="address-name__category">
        Trang chủ
        <span>/{category}</span>
      </div>

      <h1 className="name-product">{product.title}</h1>

      <p className="price-product">
        {numberWithCommas(product.priceCurrent)}
        <span className="monetary-unit">đ</span>
      </p>

      <div className="rank-product">
        <span className="ranking">
          4.2/5
          <FontAwesomeIcon className="icon-star" icon={faStar} />
        </span>
        <span className="number-reviews">123 Đánh giá</span>
        <span className="quantity-sold">123 Đã bán</span>
      </div>

      <div className="select-color">
        <div className="color-product">Màu sắc</div>
        <div
          style={{ backgroundColor: "#FA8F21" }}
          className={`item-color ${color == "Cam" && "activeColor"}`}
          onClick={() => handleColor("Cam")}
        >
          {" "}
        </div>
        <div
          style={{ backgroundColor: "#4285F4" }}
          className={`item-color ${color == "Xanh Biển" && "activeColor"}`}
          onClick={() => handleColor("Xanh Biển")}
        >
          {" "}
        </div>
        <div
          style={{ backgroundColor: "#AA0606" }}
          className={`item-color ${color == "Đỏ" && "activeColor"}`}
          onClick={() => handleColor("Đỏ")}
        >
          {" "}
        </div>
        <div
          style={{ backgroundColor: "#4F9E91" }}
          className={`item-color ${color == "Xanh Lá" && "activeColor"}`}
          onClick={() => handleColor("Xanh Lá")}
        >
          {" "}
        </div>
      </div>

      <div className="select-size">
        <div className="size-product">Size</div>
        <div
          className={`item-size ${size == "39" && "activeSize"}`}
          onClick={() => handleSize(39)}
        >
          39
        </div>
        <div
          className={`item-size ${size == "40" && "activeSize"}`}
          onClick={() => handleSize(40)}
        >
          40
        </div>
        <div
          className={`item-size ${size == "41" && "activeSize"}`}
          onClick={() => handleSize(41)}
        >
          41
        </div>
        <div
          className={`item-size ${size == "42" && "activeSize"}`}
          onClick={() => handleSize(42)}
        >
          42
        </div>
      </div>

      <div className="select-quantity__product">
        <button className="btn-quantity" onClick={() => handleMinus()}>
          -
        </button>
        <input
          className="quantity-product__buy"
          type="text"
          value={quantity}
          readOnly
        />
        <button className="btn-quantity" onClick={() => handleAdd()}>
          +
        </button>
        <button className="btn-buy" onClick={() => addToCart()}>
          Mua hàng
        </button>
      </div>

      <div className="describe-product">
        <p className="title-text">Mô tả</p>
        <ul className="list-desr">
          <li>
            Giày sneaker,Giày sneaker nam phong cách thời trang HOT 2020 mã 8801
            Shop DZP.Giá tận xưởng
          </li>
          <li>
            Phong Cách Hàn Quốc Thiết kế thời trang phong cách trẻ trung, hiện
            đại, cá tính
          </li>
          <li>Màu sắc:Trắng được phối tinh tế, Dễ phối đồ</li>
          <li>Chất liệu da , khử mùi, thoáng khí</li>
          <li> Đường may tinh tế - Êm và ôm chân</li>
        </ul>
      </div>
    </div>
  );
};

export default InfoProduct;
