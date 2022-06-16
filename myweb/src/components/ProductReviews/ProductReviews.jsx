import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./productReviews.scss";

const ProductReviews = () => {
  return (
    <div className="product-reviews">
      <p className="title-review">Đánh giá sản phẩm</p>
      <div className="block-ranking">
        <div className="ranking">
          <div className="number-rank">4.2</div>
          <div className="star-rank">
            <FontAwesomeIcon className="icon-star" icon={faStar} />
            <FontAwesomeIcon className="icon-star" icon={faStar} />
            <FontAwesomeIcon className="icon-star" icon={faStar} />
            <FontAwesomeIcon className="icon-star" icon={faStar} />
            <FontAwesomeIcon className="icon-star" icon={faStar} />
          </div>
          <div className="comment-quantity">123 Bài đánh giá</div>
        </div>
        <div className="filter-raking">
          <div className="item-raking">Tất cả</div>
          <div className="item-raking">5 sao</div>
          <div className="item-raking">4 sao</div>
          <div className="item-raking">3 sao</div>
          <div className="item-raking">2 sao</div>
          <div className="item-raking">1 sao</div>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
