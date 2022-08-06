import React, { useEffect, useState } from "react";
import axios from "axios";
import "./tableAccount.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import date from "../../../utils/date";

const TableAccount = () => {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `https://test-sp-hit.herokuapp.com/api/v1/users`
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
            <th>ID</th>
            <th>Họ Tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Giới Tính</th>
            <th>ROLE</th>
            <th>Ngày đăng kí</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.lastName + item.firstName}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.gender}</td>
              <td>{item.roles[0].name }</td>
              <td>{date(item.updatedDate)}</td>
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

export default TableAccount;
