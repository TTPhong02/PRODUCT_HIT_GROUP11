import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product";
import "./productsHot.scss";

const ProductsHot = () => {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `https://test-sp-hit.herokuapp.com/api/v1/products/sell-best`
      );
      setProducts(res.data);
      // console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="container-content">
      <h1 className="title-content"># Sản phẩm bán chạy</h1>
      <p className="desc-title">Top những sản phẩm được mưa nhiều nhất</p>
      <div className="products-list grid lg:grid-rows-2 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2">
        {products ? (
          products.map((item) => (
            <Product
              key={item.id.toString()}
              src={item.images[0].imageUrl}
              name={item.title}
              price={item.priceCurrent}
              sale={item.isSale}
              slug={item.slug}
            />
          ))
        ) : (
          <h1 className="loading">Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default ProductsHot;
