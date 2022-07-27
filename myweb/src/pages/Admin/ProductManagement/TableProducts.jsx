import React, { useEffect, useState } from "react";
import axios from "axios";
import "./tableProducts.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

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

  const handleChangeProduct = () => {
    alert("Bạn muốn thay đổi thông tin sản phẩm");
  };

  const handleDeleteProduct = () => {
    alert("Bạn đã xóa thành công");
  };

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
                <button onClick={handleChangeProduct}>Sửa</button>
                <button onClick={handleDeleteProduct}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="footer-page">
        <button>Thêm mới</button>
        <ul className="move-page">
          <FontAwesomeIcon icon={faAngleLeft} />
          <li>
            <a href="">1</a>
          </li>
          <li>
            <a href="">2</a>
          </li>
          <li>
            <a href="">3</a>
          </li>
          <li>
            <a href="">4</a>
          </li>
          <li>
            <a href="">5</a>
          </li>
          <li>
            <a href="">6</a>
          </li>
          <li>
            <a href="">...</a>
          </li>
          <FontAwesomeIcon icon={faAngleRight} />
        </ul>
      </div>
    </div>
  );
};

export default TableProducts;
