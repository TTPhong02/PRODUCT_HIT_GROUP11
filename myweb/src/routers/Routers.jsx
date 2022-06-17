import React from "react";
import { Route, Routes } from "react-router-dom";
import { Voucher } from "../components/Voucher/Voucher";
import { CartMain } from "../pages/CartMain/CartMain";
import Home from "../pages/Home/Home";
import SignInForm from "../components/SignInForm/SignInForm";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import ProductView from "../pages/ProductView/ProductView";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:slug" element={<ProductView />} />
      <Route path="/signIn" element={<SignInForm />} />
      <Route path="/signUp" element={<SignUpForm />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/cart" element={<CartMain />} />
      <Route path="/myvoucher" element={<Voucher />} />
    </Routes>
  );
};

export default Routers;
