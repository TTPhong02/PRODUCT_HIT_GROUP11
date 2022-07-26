import React from "react";
import PropTypes from "prop-types";
import "./product.scss";
import { Link, useParams } from "react-router-dom";
import numberWithCommas from "../../utils/numberWithCommas";

const Product = (props) => {
  const { src, name, price, sale, slug } = props;
  // let params = useParams();
  // const product = getProductBySlug(params.slug);
  // const money = price.toLocaleString("it-IT", {
  //   style: "currency",
  //   currency: "vnd",
  // });

  return (
    <Link
      to={`/products/${slug}`}
      className="item-product lg:col-span-1 lg:row-span-1 md:col-span-1 sm:col-span-1"
    >
      <img className="img-product" src={src} alt="" />
      {sale && (
        <div className="discount-product">
          <div className="sale">Giảm {sale}%</div>
        </div>
      )}
      <p className="name-product">{name}</p>
      <p className="price-product">{numberWithCommas(price)} VND</p>
    </Link>
  );
};

Product.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  sale: PropTypes.string,
  slug: PropTypes.string.isRequired,
};

export default Product;
