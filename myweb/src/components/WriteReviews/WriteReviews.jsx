import React from "react";
import "./writeReviews.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarR } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";

const WriteReviews = ({ idProduct, idUser }) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(1);
  const handleOnchange = (value) => {
    setComment(value);
  };

  const postStart = (star) => {
    return axios.post(
      `https://test-sp-hit.herokuapp.com/api/v1/product-rates/rate/${idProduct}/${idUser}`,
      {
        value: star,
      }
    );
  };

  const postContent = () => {
    return axios.post(
      `https://test-sp-hit.herokuapp.com/api/v1/comments/${idUser}/${idProduct}`,
      {
        content: comment,
      }
    );
  };

  const postComment = async (star) => {
    await Promise.all([postStart(star), postContent()]);
  };

  const handleSubmit = () => {
    if (comment === "") {
      alert("Bạn chưa đánh giá");
    } else if (idUser) {
      let ratingString = "";
      if (rating === 1) {
        ratingString = "ONE_STAR";
      } else if (rating === 2) {
        ratingString = "TWO_STAR";
      } else if (rating === 3) {
        ratingString = "THREE_STAR";
      } else if (rating === 4) {
        ratingString = "FOUR_STAR";
      } else if (rating === 5) {
        ratingString = "FIVE_STAR";
      }
      postComment(ratingString);
    }
  };
  return (
    <div className="content-reviews">
      <p className="title-container">Viết nhận xét</p>
      <p className="text-reviews">Đánh giá</p>
      <div className="user-vote">
        {[...Array(5)].map((_, index) => (
          <span key={index} onClick={() => setRating(index + 1)}>
            {rating > index ? (
              <FontAwesomeIcon className="star-rating" icon={faStar} />
            ) : (
              <FontAwesomeIcon className="star-rating" icon={faStarR} />
            )}
          </span>
        ))}
      </div>
      <input
        className={`box-reviews ${comment && "clicked"}`}
        type="text"
        placeholder="Nhận xét"
        value={comment}
        onChange={(e) => handleOnchange(e.target.value)}
      />
      <button className="btn-submit__content" onClick={handleSubmit}>
        Gửi nhận xét
      </button>
    </div>
  );
};

export default WriteReviews;
