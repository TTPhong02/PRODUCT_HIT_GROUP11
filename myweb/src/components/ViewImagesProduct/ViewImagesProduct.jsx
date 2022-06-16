import React, { useState, useRef } from "react";
import "./viewImagesProduct.scss";
import "animate.css";

const ViewImagesProduct = () => {
  const listImage = [
    {
      id: 1,
      urlImg:
        "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/953f8c77-48ab-4583-b040-c04a3a93ab32/air-jordan-1-ko-chicago-release-date.jpg",
    },
    {
      id: 2,
      urlImg:
        "https://fsport247.com/wp-content/uploads/2021/04/giay-nike-jordan-1-og-chicago-replica.jpg",
    },
    {
      id: 3,
      urlImg:
        "https://bizweb.dktcdn.net/100/376/706/products/chicago-uhite.jpg?v=1615721788827",
    },
    {
      id: 4,
      urlImg:
        "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/953f8c77-48ab-4583-b040-c04a3a93ab32/air-jordan-1-ko-chicago-release-date.jpg",
    },
    {
      id: 5,
      urlImg:
        "https://dqshop.vn/wp-content/uploads/2021/10/giay-nike-air-jordan-1-mid-chicago-white-toe-sieu-cap-dep-chat.jpg",
    },
    {
      id: 6,
      urlImg:
        "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/953f8c77-48ab-4583-b040-c04a3a93ab32/air-jordan-1-ko-chicago-release-date.jpg",
    },
  ];

  const [i, setI] = useState(0);
  const [clicked, setClicked] = useState(0);

  const handleClick = (index) => {
    setI(index);
    setClicked(index);
  };

  return (
    <div>
      <div className="view-list__image">
        <div className="list-image__small">
          {listImage.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`item-img__small ${clicked === index && "active"}`}
            >
              <img src={item.urlImg} alt="" />
            </div>
          ))}
        </div>
        <div className="view-image-big">
          <div className="item-img__big">
            <img src={listImage[i].urlImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewImagesProduct;
