import React from "react";
import "./productView.scss";
import Brands from "../../components/Brands/Brands";
import InfoProduct from "../../components/InfoProduct/InfoProduct";
import ViewImagesProduct from "../../components/ViewImagesProduct/ViewImagesProduct";
import ProductReviews from "../../components/ProductReviews/ProductReviews";
import AdditionalInformation from "../../components/AdditionialInfomation/AdditionalInformation";
import UserReview from "../../components/UserReview/UserReview";
const ProductView = () => {
  return (
    <div className="contain-page">
      <div className="info-product">
        <ViewImagesProduct />
        <InfoProduct />
      </div>
      <div className="more-info">
        <div className="nav-more">
          <p className="addition-info active">Thông tin bổ sung</p>
          <p className="reviews-product">Đánh giá (123)</p>
        </div>
        <ProductReviews />
        {/* <AdditionalInformation /> */}
      </div>
      <div className="user-review">
        <UserReview />
        <UserReview />
        <UserReview />
        <UserReview />
      </div>
      <Brands />
    </div>
  );
};

export default ProductView;
