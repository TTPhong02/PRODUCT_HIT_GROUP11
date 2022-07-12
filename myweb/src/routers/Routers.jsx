import React from "react";
import { Route, Routes } from "react-router-dom";
import { Voucher } from "../components/Voucher/Voucher";
import { CartMain } from "../pages/CartMain/CartMain";
import Home from "../pages/Home/Home";
import SignInForm from "../components/SignInForm/SignInForm";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import ProductView from "../pages/ProductView/ProductView";
import Contact from "../pages/Contact/Contact";
import Products from "../pages/Products/Products";
import Promotion from "../pages/Promotion/Promotion";
import { Payment } from "../pages/Payment/Pay/Payment";
import { PayDone } from "../pages/Payment/PaymentDone/PayDone";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:slug" element={<ProductView />} />
      <Route path="/signIn" element={<SignInForm />} />
      <Route path="/signUp" element={<SignUpForm />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/cart" element={<CartMain />} />
      <Route path="/myvoucher" element={<Voucher />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />

      <Route path="/promotion" element={<Promotion />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/paysuccess" element={<PayDone />} />
    </Routes>
  );
};

export default Routers;
