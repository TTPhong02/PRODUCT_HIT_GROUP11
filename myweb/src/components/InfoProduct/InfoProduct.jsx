import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import React, { useState } from "react";
import "./infoProduct.scss";

const InfoProduct = () => {
  const category = "sneaker";
  const [quantity, setQuantity] = useState(1);
  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className="details-product">
      <div className="address-name__category">
        Trang chủ
        <span>/{category}</span>
      </div>

      <h1 className="name-product">
        Giày Thể Thao Nam Biti’s Hunter X Liteknit DSMH02201XNH (Xanh Nhớt)
      </h1>

      <p className="price-product">
        899.000
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
        <div style={{ backgroundColor: "#FA8F21" }} className="item-color">
          {" "}
        </div>
        <div style={{ backgroundColor: "#4285F4" }} className="item-color">
          {" "}
        </div>
        <div style={{ backgroundColor: "#AA0606" }} className="item-color">
          {" "}
        </div>
        <div style={{ backgroundColor: "#4F9E91" }} className="item-color">
          {" "}
        </div>
      </div>

      <div className="select-size">
        <div className="size-product">Size</div>
        <div className="item-size">39</div>
        <div className="item-size">40</div>
        <div className="item-size">41</div>
        <div className="item-size">41</div>
      </div>

      <div className="select-quantity__product">
        <button className="btn-quantity" onClick={() => handleMinus()}>
          -
        </button>
        <input className="quantity-product__buy" type="text" value={quantity} />
        <button className="btn-quantity" onClick={() => handleAdd()}>
          +
        </button>
        <button className="btn-buy">Mua hàng</button>
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
