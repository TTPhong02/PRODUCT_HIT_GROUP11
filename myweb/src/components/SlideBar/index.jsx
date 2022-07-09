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
            src="https://scontent.fpnh22-3.fna.fbcdn.net/v/t1.15752-9/280285403_3214987072077351_1165742808335137932_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=KZVg7xeoClYAX-Wh1j1&tn=0fynKENuznZXyMe_&_nc_ht=scontent.fpnh22-3.fna&oh=03_AVJK9hVgx-XZu8u4HvttZNqleE1PMZtnAO0-c7ckleheeg&oe=62B3CB7A"
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
