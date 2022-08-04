import React from "react";
import "./home.scss";
import SliderBar from "../../components/SlideBar/index";
import Category from "../../components/Category/Category";
import SaleAdv from "../../components/SaleAdv/SaleAdv";
import ProductsHot from "../../components/ProductsHot/ProductsHot";
import ProductsNew from "../../components/ProductsNew/ProductsNew";
import News from "../../components/News/News";
import Brands from "../../components/Brands/Brands";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllUser, getCartFromUSer } from "../../redux/apiRequest/apiRequest";

const Home = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    getAllUser(dispatch)
    getCartFromUSer(dispatch)
  },[])

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
