import React from "react";
import "./home.scss";
import SliderBar from "../../components/SlideBar/index";
import Category from "../../components/Category/Category";
import SaleAdv from "../../components/SaleAdv/SaleAdv";
import ProductsHot from "../../components/ProductsHot/ProductsHot";
import ProductsNew from "../../components/ProductsNew/ProductsNew";
import News from "../../components/News/News";
import Brands from "../../components/Brands/Brands";

const Home = () => {
  return (
    <div className="container ">
      <SliderBar />
      <Category />
      <ProductsHot />
      <SaleAdv />
      <ProductsNew />
      <News />
      <Brands />
    </div>
  );
};

export default Home;
