import React from "react";
import "./writeReviews.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const WriteReviews = () => {
  const [comment, setComment] = useState("");
  const handleOnchange = (value) => {
    setComment(value);
    console.log(comment);
  };
  return (
    <div className="content-reviews">
      <p className="title-container">Viết nhận xét</p>
      <p className="text-reviews">Đánh giá</p>
      <div className="user-vote">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
      <input
        className={`box-reviews ${comment && "clicked"}`}
        type="text"
        placeholder="Nhận xét"
        onChange={(e) => handleOnchange(e.target.value)}
      />
      <button className="btn-submit__content">Gửi nhận xét</button>
    </div>
  );
};

export default WriteReviews;
