import React, { useEffect, useState } from "react";
import axios from "axios";
import "./tableProducts.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

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

  const handleDeleteProduct = (id) => {
    const handle = axios.delete(
      `https://hit-sneaker.herokuapp.com/api/v1/products/${id}`
    );

    if (handle.request.status === 200) {
      alert("Xóa thành công");
    }
  };

  const [display, setDisplay] = useState("none");
  const addItem = () => {
    setDisplay("block");
  };

  return (
    <div className="table-products">
      <div style={{ display: display }} className="box-add">
        <div className="closed" onClick={() => setDisplay("none")}>
          <FontAwesomeIcon className="icon-closed" icon={faXmark} />
        </div>
        <form action="">
          <label htmlFor="">Nhập tên sản phẩm</label>
          <input className="input-value" type="text" />
          <br></br>
          <br></br>
          <label htmlFor="">Nhập tên sản phẩm</label>
          <input className="input-value" type="text" />
          <br></br>
          <br></br>
          <label htmlFor="">Nhập tên sản phẩm</label>
          <input className="input-value" type="text" />
          <br></br>
          <br></br>
          <label htmlFor="">Nhập tên sản phẩm</label>
          <input className="input-value" type="text" />
          <br></br>
          <br></br>
          <label htmlFor="">Nhập tên sản phẩm</label>
          <input className="input-value" type="text" />
          <br></br>
          <div className="box-btn">
            <input className="btn-box" type="button" value="Thêm" />
            <input className="btn-box" type="reset" value="Reset" />
          </div>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>Mã sản phẩm</th>
            <th>Tên Voucher</th>
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
                <button onClick={(e) => handleDeleteProduct(e, item.id)}>
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="footer-page">
        <button onClick={addItem}>Thêm mới</button>
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
