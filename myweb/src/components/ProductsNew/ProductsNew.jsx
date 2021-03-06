import React from "react";
import Product from "../Product";
import "./productsNew.scss";

const ProductsNew = () => {
  const productsHot = [
    {
      id: 1,
      sale: "50",
      src: "https://media.vneconomy.vn/w800/images/upload/2021/12/14/nike.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp1",
    },

    {
      id: 2,
      src: "https://media.vneconomy.vn/w800/images/upload/2021/12/14/nike.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp2",
    },

    {
      id: 3,
      sale: "50",
      src: "https://media.vneconomy.vn/w800/images/upload/2021/12/14/nike.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp3",
    },

    {
      id: 4,
      src: "https://media.vneconomy.vn/w800/images/upload/2021/12/14/nike.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp4",
    },

    {
      id: 5,
      src: "https://media.vneconomy.vn/w800/images/upload/2021/12/14/nike.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp5",
    },

    {
      id: 5,
      src: "https://media.vneconomy.vn/w800/images/upload/2021/12/14/nike.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp6",
    },
  ];

  return (
    <div className="container-content">
      <h1 className="title-content"># Sản phẩm mới nhất</h1>
      <p className="desc-title">
        Những sản phẩm mới được shop mang về phục vụ các tín đồ
      </p>
      <div className="products-list grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2">
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
  );
};

export default ProductsNew;
