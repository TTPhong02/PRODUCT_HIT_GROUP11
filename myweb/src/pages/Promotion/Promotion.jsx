import React from "react";
import "./promotion.scss";
import Product from "../../components/Product";

const Promotion = () => {
  const productsHot = [
    {
      id: 1,
      sale: "50",
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp1",
    },

    {
      id: 2,
      src: "https://www.mpe.com.vn/Data/Sites/1/News/105/150223eye330swacker1jpgcroporiginal-original-1507629292709.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp2",
    },

    {
      id: 3,
      sale: "50",
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp3",
    },

    {
      id: 4,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp4",
    },

    {
      id: 5,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp5",
    },

    {
      id: 6,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp6",
    },

    {
      id: 7,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp6",
    },

    {
      id: 8,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp6",
    },

    {
      id: 9,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp6",
    },

    {
      id: 10,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp6",
    },

    {
      id: 11,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp6",
    },

    {
      id: 12,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp6",
    },
  ];
  return (
    <div>
      <div className="container-promotion">
        <div className="nav-page">
          <div className="link-page">
            <p className="link-prev">Trang chủ /</p>
            <p className="link-current"> Cửa hàng</p>
          </div>
        </div>
        <div className="main-content">
          <div className="nav-left">
            <p className="products-promotional">Sản phẩm khuyến mãi</p>
            <p className="voucher-block">Voucher giảm giá</p>
          </div>
          <div className="list-product-filtered grid grid-cols-4 gap-y-30px gap-30">
            {productsHot.map((item) => (
              <Product
                key={item.id.toString()}
                src={item.src}
                name={item.name}
                price={item.price}
                sale={item.sale}
                slug={item.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
