import React from "react";
import "./productView.scss";
import Brands from "../Brands/Brands";
import InfoProduct from "../InfoProduct/InfoProduct";
import ViewImagesProduct from "../ViewImagesProduct/ViewImagesProduct";
import ProductReviews from "../ProductReviews/ProductReviews";
import AdditionalInformation from "../AdditionialInfomation/AdditionalInformation";
import UserReview from "../UserReview/UserReview";
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
      </div>
      <Brands />
    </div>
  );
};

export default ProductView;
