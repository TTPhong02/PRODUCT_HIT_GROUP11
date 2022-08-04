import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Product";
import "./productsNew.scss";

const ProductsNew = () => {
  const [productsNew, setProductsNew] = useState([]);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `https://test-sp-hit.herokuapp.com/api/v1/products/news`
      );
      setProductsNew(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="container-content">
      <h1 className="title-content"># Sản phẩm mới nhất</h1>
      <p className="desc-title">
        Những sản phẩm mới được shop mang về phục vụ các tín đồ
      </p>
      <div className="products-list grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2">
        {productsNew.map((item) => (
          <Product
            key={item.id.toString()}
            src={item.images[0].imageUrl}
            name={item.title}
            price={item.priceCurrent}
            sale={item.isSale}
            slug={item.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsNew;
