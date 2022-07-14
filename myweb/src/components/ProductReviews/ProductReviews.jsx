import React from "react";
import { useState } from "react";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./productReviews.scss";

const ProductReviews = () => {
  const [filterRank, setFilterRank] = useState(0);
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
            <FontAwesomeIcon className="icon-star" icon={faStarHalfStroke} />
          </div>
          <div className="comment-quantity">123 Bài đánh giá</div>
        </div>
        <div className="filter-raking">
          <div
            className={`item-raking ${filterRank === 0 && "active"}`}
            onClick={() => setFilterRank(0)}
          >
            Tất cả
          </div>
          <div
            className={`item-raking ${filterRank === 5 && "active"}`}
            onClick={() => setFilterRank(5)}
          >
            5 sao
          </div>
          <div
            className={`item-raking ${filterRank === 4 && "active"}`}
            onClick={() => setFilterRank(4)}
          >
            4 sao
          </div>
          <div
            className={`item-raking ${filterRank === 3 && "active"}`}
            onClick={() => setFilterRank(3)}
          >
            3 sao
          </div>
          <div
            className={`item-raking ${filterRank === 2 && "active"}`}
            onClick={() => setFilterRank(2)}
          >
            2 sao
          </div>
          <div
            className={`item-raking ${filterRank === 1 && "active"}`}
            onClick={() => setFilterRank(1)}
          >
            1 sao
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
