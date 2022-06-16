import React from "react";
import "./userReview.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
const UserReview = () => {
  return (
    <div className="item-comment">
      <div className="user">
        <img
          src="https://kenh14cdn.com/203336854389633024/2021/7/29/myvanh2054286994949691217410844763204888409440211n-1627523268551486434209.jpg"
          alt=""
          className="avt-user"
        />
        <div className="name-user">Tuan Anh</div>
      </div>
      <div className="user-status">
        <div className="list-star">
          <FontAwesomeIcon className="icon-star" icon={faStar} />
          <FontAwesomeIcon className="icon-star" icon={faStar} />
          <FontAwesomeIcon className="icon-star" icon={faStar} />
          <FontAwesomeIcon className="icon-star" icon={faStar} />
          <FontAwesomeIcon className="icon-star" icon={faStar} />
        </div>
        <div className="time-review">1 tháng 6, 2022</div>
      </div>
      <p className="content-comment">
        Shop đóng gói rất cẩn thuận và chu đáo, giao hàng nhanh, shipper thân
        thiện
      </p>
      <div className="list-image__comment">
        <div
          className="item-image__comment"
          style={{
            backgroundImage: `url(
              "https://www.bmw.vn/content/dam/bmw/common/all-models/7-series/sedan/2019/inspire/bmw-7series-sedan-inspire-taphold-01-slide-01-desktop.jpg"
            )`,
          }}
        ></div>
        <div
          className="item-image__comment"
          style={{
            backgroundImage: `url(
              "https://www.bmw.vn/content/dam/bmw/common/all-models/7-series/sedan/2019/inspire/bmw-7series-sedan-inspire-taphold-01-slide-01-desktop.jpg"
            )`,
          }}
        ></div>
        <div
          className="item-image__comment"
          style={{
            backgroundImage: `url(
              "https://www.bmw.vn/content/dam/bmw/common/all-models/7-series/sedan/2019/inspire/bmw-7series-sedan-inspire-taphold-01-slide-01-desktop.jpg"
            )`,
          }}
        ></div>
        <div
          className="item-image__comment"
          style={{
            backgroundImage: `url(
              "https://www.bmw.vn/content/dam/bmw/common/all-models/7-series/sedan/2019/inspire/bmw-7series-sedan-inspire-taphold-01-slide-01-desktop.jpg"
            )`,
          }}
        ></div>
      </div>

      <div className="user-like">
        <FontAwesomeIcon className="icon-like" icon={faThumbsUp} />
        Hữu ích?
      </div>
    </div>
  );
};

export default UserReview;
