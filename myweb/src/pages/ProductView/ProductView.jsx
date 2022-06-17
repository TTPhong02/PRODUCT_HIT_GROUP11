import React from "react";
import "./productView.scss";
import Brands from "../../components/Brands/Brands";
import InfoProduct from "../../components/InfoProduct/InfoProduct";
import ViewImagesProduct from "../../components/ViewImagesProduct/ViewImagesProduct";
import ProductReviews from "../../components/ProductReviews/ProductReviews";
import AdditionalInformation from "../../components/AdditionialInfomation/AdditionalInformation";
import UserReview from "../../components/UserReview/UserReview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import WriteReviews from "../../components/WriteReviews/WriteReviews";
import Product from "../../components/Product/index";
const ProductView = () => {
  const productsHot = [
    {
      id: 1,
      sale: "50",
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
    },

    {
      id: 2,
      src: "https://www.mpe.com.vn/Data/Sites/1/News/105/150223eye330swacker1jpgcroporiginal-original-1507629292709.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
    },

    {
      id: 3,
      sale: "50",
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
    },

    {
      id: 4,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
    },

    {
      id: 5,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
    },
  ];

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

        <div className="btn-view__more">
          <div className="btn-more btn-move">
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
          <div className="btn-more active">1</div>
          <div className="btn-more">2</div>
          <div className="btn-more">3</div>
          <div className="btn-more">4</div>
          <div className="btn-more">5</div>
          <div className="btn-more">...</div>
          <div className="btn-more btn-move">
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
      </div>
      <WriteReviews />
      <p className="title-products">Sản phẩm tương tự</p>

      <div className="products-list grid lg:grid-cols-5 lg:grid-rows-1 md:grid-cols-2 sm:grid-cols-2">
        {productsHot.map((item) => (
          <Product
            key={item.id.toString()}
            src={item.src}
            name={item.name}
            price={item.price}
            sale={item.sale}
          />
        ))}
      </div>
      <Brands />
    </div>
  );
};

export default ProductView;
