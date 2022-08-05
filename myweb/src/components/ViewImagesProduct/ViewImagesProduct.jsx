import React, { useState, useRef } from "react";
import "./viewImagesProduct.scss";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ViewImagesProduct = ({ product }) => {
  const [i, setI] = useState(0);
  const [clicked, setClicked] = useState(0);

  const handleClick = (index) => {
    setI(index);
    setClicked(index);
  };

  let length = product.images.length;

  const handlePrev = () => {
    if (i === 0) {
      let num = length - 1;
      setI(num);
      setClicked(num);
    } else {
      setI(i - 1);
      setClicked(i - 1);
    }
  };

  const handleNext = () => {
    let length = product.images.length;
    if (i === length - 1) {
      let num = 0;
      setI(num);
      setClicked(num);
    } else {
      setI(i + 1);
      setClicked(i + 1);
    }
  };

  return (
    <div>
      <div className="view-list__image">
        <div className="list-image__small">
          {product.images.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`item-img__small ${clicked === index && "active"}`}
            >
              <img src={item.imageUrl} alt="" />
            </div>
          ))}
        </div>
        <div className="view-image-big">
          <div className="btn-prev__image" onClick={handlePrev}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
          <div className="item-img__big">
            <img src={product.images[i].imageUrl} alt="" />
          </div>
          <div className="btn-next__image">
            <FontAwesomeIcon icon={faAngleRight} onClick={handleNext} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewImagesProduct;
