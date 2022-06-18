import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product";
import "./productsHot.scss";

const ProductsHot = () => {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `https://hit-sneaker.herokuapp.com/api/v1/products`
      );
      setProducts(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  // const getProductBySlug = (slug) => products.find((e) => e.slug === slug);

  return (
    <div className="container-content">
      <h1 className="title-content"># Sản phẩm bán chạy</h1>
      <p className="desc-title">Top những sản phẩm được mưa nhiều nhất</p>
      <div className="products-list grid lg:grid-rows-2 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2">
        {products.map((item) => (
          <Product
            key={item.id.toString()}
            src={item.images[0].imageUrl}
            name={item.title}
            price={item.priceCurrent}
            sale={item.sale}
            slug={item.slug}
            // getProductBySlug={getProductBySlug}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsHot;
