import React, { useState } from "react";
import "./userReview.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarR } from "@fortawesome/free-regular-svg-icons";
import { useEffect } from "react";
const UserReview = ({ content, avt, firstName, lastName, date, star }) => {
  const [rateStar, setRateStar] = useState(0);

  console.log(content);

  useEffect(() => {
    if (star == "ONE_STAR") {
      setRateStar(1);
    } else if (star === "TWO_STAR") {
      setRateStar(2);
    } else if (star === "THREE_STAR") {
      setRateStar(3);
    } else if (star === "FOUR_STAR") {
      setRateStar(4);
    } else if (star === "FIVE_STAR") {
      setRateStar(5);
    }
  }, [rateStar]);

  // console.log(rateStar);

  return (
    <div className="item-comment">
      <div className="user">
        {avt ? (
          <img src={avt} alt="" className="avt-user" />
        ) : (
          <img
            style={{ border: "1px solid #333" }}
            src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
            alt=""
            className="avt-user"
          />
        )}
        <div className="name-user">
          {firstName} {lastName}
        </div>
      </div>
      <div className="user-status">
        <div className="list-star">
          {[...Array(5)].map((_, index) => (
            <span key={index}>
              {rateStar > index ? (
                <FontAwesomeIcon className="star-rating" icon={faStar} />
              ) : (
                <FontAwesomeIcon className="star-rating" icon={faStarR} />
              )}
            </span>
          ))}
        </div>
        <div className="time-review">{date}</div>
      </div>
      <p className="content-comment">{content}</p>
      <div className="list-image__comment">
        <img
          className="item-image__comment"
          src="https://cf.shopee.vn/file/40f934f1120dd7c4d3fd0f5bc17ff6d4"
          alt=""
        />
        <img
          className="item-image__comment"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqIGFrijwKfoUetsC5KMjCdQtTlB4Pyvv1g&usqp=CAU"
          alt=""
        />
        <img
          className="item-image__comment"
          src="https://cf.shopee.vn/file/87a28d98abf48f493c3f667a8c926b7a"
          alt=""
        />
      </div>

      <div className="user-like">
        <FontAwesomeIcon className="icon-like" icon={faThumbsUp} />
        Hữu ích?
      </div>
    </div>
  );
};

export default UserReview;
