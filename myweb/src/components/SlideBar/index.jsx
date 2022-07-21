import React from "react";
import Slider from "react-slick";
import "./slideBar.scss";

const SlideBar = () => {
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} btn-next`}
        style={{
          ...style,
          display: "block",
          background: "transperent",
          marginRight: "100px",
        }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} btn-prev`}
        style={{
          ...style,
          display: "block",
          background: "transperent",
          marginLeft: "70px",
          position: "absolute",
          zIndex: "2",
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          paddingBottom: "30px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="slide-bar">
      <Slider {...settings}>
        <div>
          <img
            className="img-demo"
            src="https://gangsworld.com/wp-content/uploads/2021/04/untitled-1_optimized-20.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="img-demo"
            src="https://thietkehaithanh.com/wp-content/uploads/2021/11/banner-giay-thietkehaithanh.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="img-demo"
            src="http://file.hstatic.net/1000282067/file/banner_1900x870_da830551_3590986f007d47e6bcdf3c48ea6347fa_2048x2048.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="img-demo"
            src="https://ordixi.com/wp-content/uploads/2019/04/giay-chay-bo-49b814ac.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SlideBar;
