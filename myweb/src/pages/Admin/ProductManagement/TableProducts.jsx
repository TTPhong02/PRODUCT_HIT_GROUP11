import React, { useEffect, useState } from "react";
import axios from "axios";
import "./tableProducts.scss";

const TableProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `https://hit-sneaker.herokuapp.com/api/v1/products`
      );
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  products.map((item) => console.log(item.id));
  return (
    <div className="table-products">
      <table>
        <thead>
          <tr>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Mô tả</th>
            <th>Size</th>
            <th>Màu sắc</th>
            <th>Số lượng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.priceCurrent}</td>
              <td>{item.shortDescription}</td>
              <td>38, 39, 40, 41</td>
              <td>Trắng, xanh, đen, đỏ</td>
              <td>{item.amountSell}</td>
              <td>
                <button>Sửa</button>
                <button>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableProducts;
