import React, { useEffect, useState } from "react";
import axios from "axios";
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
import { useParams } from "react-router-dom";
import date from "../../utils/date";

const ProductView = () => {
  const productsHot = [
    {
      id: 1,
      sale: "50",
      src: "https://sneakerhs.com/wp-content/uploads/2019/10/giay-Puma-Basket-Platform-Metallic-puma-mui-bong-rep-11-gia-re-ha-noi.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
    },

    {
      id: 2,
      src: "https://24htivi.net/wp-content/uploads/2020/12/giay-sneakers-kinh-dien-converse-4-mau.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
    },

    {
      id: 3,
      sale: "50",
      src: "https://sneakerhs.com/wp-content/uploads/2019/10/giay-Puma-Basket-Platform-Metallic-puma-mui-bong-rep-11-gia-re-ha-noi.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
    },

    {
      id: 4,
      src: "https://sneakerhs.com/wp-content/uploads/2019/10/giay-Puma-Basket-Platform-Metallic-puma-mui-bong-rep-11-gia-re-ha-noi.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
    },

    {
      id: 5,
      src: "https://sneakerhs.com/wp-content/uploads/2019/10/giay-Puma-Basket-Platform-Metallic-puma-mui-bong-rep-11-gia-re-ha-noi.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
    },
  ];

  const [products, setProducts] = useState([]);
  const [pageCurrent, setPageCurrent] = useState("moreInfo");
  const [idProduct, setIdProduct] = useState("0");
  const [comments, setComments] = useState([]);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `https://test-sp-hit.herokuapp.com/api/v1/products`
      );
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  let param = useParams();
  const getProductBySlug = (slug) => products.find((e) => e.slug === slug);
  const product = getProductBySlug(param.slug);

  const fetchComment = async (id) => {
    try {
      const res = await axios.get(
        `https://test-sp-hit.herokuapp.com/api/v1/products/rate/${id}`
      );
      setComments(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (product) {
      setIdProduct(product.id);
      fetchComment(idProduct);
    }
  }, [product]);

  const user = localStorage.getItem("account");
  let idUser;
  if (user) {
    idUser = JSON.parse(user).id;
  }
  return (
    <div className="contain-page">
      {product ? (
        <>
          <div className="info-product">
            <ViewImagesProduct product={product} />
            <InfoProduct product={product} />
          </div>
          <div className="more-info">
            <div className="nav-more">
              <p
                className={`addition-info ${
                  pageCurrent === "moreInfo" ? "active" : ""
                }`}
                onClick={() => setPageCurrent("moreInfo")}
              >
                Thông tin bổ sung
              </p>
              <p
                className={`reviews-product ${
                  pageCurrent === "review" ? "active" : ""
                }`}
                onClick={() => setPageCurrent("review")}
              >
                Đánh giá (123)
              </p>
            </div>
            <ProductReviews />
            {/* <AdditionalInformation /> */}
          </div>
          <div className="user-review">
            {comments ? (
              <div>
                {comments.map((item) => (
                  <UserReview
                    key={item.id}
                    content={item.comment && item.comment.content}
                    avt={item.user.avatar}
                    firstName={
                      item.user.firstName ? item.user.firstName : "Người đã"
                    }
                    lastName={
                      item.user.lastName ? item.user.lastName : "mua sản phẩm"
                    }
                    date={date(item.createdDate)}
                    star={item.value ? item.value : "ONE_STAR"}
                  />
                ))}
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
            ) : (
              <div className="commnet-empty">
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/pdp/eac95a8ac896158642c2761a9e9cd52e.png"
                  alt=""
                />
                <p>Chưa có nhận xét</p>
              </div>
            )}
          </div>
          <WriteReviews idProduct={idProduct} idUser={idUser} />
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
        </>
      ) : (
        <h1 className="loading">Loading...</h1>
      )}

      <Brands />
    </div>
  );
};

export default ProductView;
