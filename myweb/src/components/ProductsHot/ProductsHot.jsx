import React from "react";
import Product from "../Product";
import "./productsHot.scss";

const ProductsHot = () => {
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

    {
      id: 6,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
    },

    {
      id: 7,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
    },

    {
      id: 8,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
    },
  ];

  return (
    <div className="container-content">
      <h1 className="title-content"># Sản phẩm bán chạy</h1>
      <p className="desc-title">Top những sản phẩm được mưa nhiều nhất</p>
      <div className="products-list grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2">
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
    </div>
  );
};

export default ProductsHot;
