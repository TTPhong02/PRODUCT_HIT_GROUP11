import React from "react";
import "./product.scss";

const Product = (props) => {
  const { src, name, price, sale } = props;
  return (
    <div className="item-product col-span-1 md:col-span-1 sm:col-span-1">
      <img className="img-product" src={src} alt="" />
      {sale && (
        <div className="discount-product">
          <div className="sale">Giảm {sale}%</div>
        </div>
      )}
      <p className="name-product">{name}</p>
      <p className="price-product">{price} vnđ</p>
    </div>
  );
};

export default Product;
