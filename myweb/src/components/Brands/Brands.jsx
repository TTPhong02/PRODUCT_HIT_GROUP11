import React from "react";
import "./brands.scss";

const Brands = () => {
  const brandsFamous = [
    {
      id: 1,
      src: "http://pngimg.com/uploads/nike/nike_PNG18.png",
    },

    {
      id: 2,
      src: "http://pngimg.com/uploads/nike/nike_PNG18.png",
    },

    {
      id: 3,
      src: "http://pngimg.com/uploads/nike/nike_PNG18.png",
    },

    {
      id: 4,
      src: "http://pngimg.com/uploads/nike/nike_PNG18.png",
    },
    {
      id: 5,
      src: "http://pngimg.com/uploads/nike/nike_PNG18.png",
    },
    {
      id: 6,
      src: "http://pngimg.com/uploads/nike/nike_PNG18.png",
    },
  ];

  return (
    <div className="container-content">
      <h1 className="title-content"># Thương hiệu nổi tiếng</h1>
      <p className="desc-title">
        Chúng tôi luôn đem đến cho khách hàng những thương hiệu hàng đầu thế
        giới
      </p>
      <div className="brand grid grid-cols-6 mt-20">
        {brandsFamous.map((item) => (
          <div className="item-brand">
            <img
              key={item.id}
              className="img-brand col-span-1"
              src={item.src}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
