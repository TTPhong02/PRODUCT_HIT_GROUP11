import React from "react";
import "./writeReviews.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarR } from "@fortawesome/free-regular-svg-icons";

const WriteReviews = () => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(1);
  const handleOnchange = (value) => {
    setComment(value);
  };

  const handleSubmit = () => {
    if (comment === "") {
      alert("Bạn chưa đánh giá");
    } else {
      let userReview = {
        rating: rating,
        comment: comment,
      };
      alert(JSON.stringify(userReview));
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
