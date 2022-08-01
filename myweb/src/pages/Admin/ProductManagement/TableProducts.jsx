import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFormik, Field } from "formik";
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

  const formik = useFormik({
    initialValues: {
      amountSell: 0,
      brand: "",
      gender: "",
      idCategory: 0,
      img: null,
      isSale: "false",
      longDescription: "",
      priceCurrent: 0,
      priceOld: 0,
      shortDescription: "",
      title: "",
      type: "",
    },
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      try {
        const res = await axios.post(
          `https://test-sp-hit.herokuapp.com/api/v1/products/create/${values.idCategory}`,
          {
            // idCategory: values.idCategory,
            amountSell: values.amountSell,
            brand: values.brand,
            gender: values.gender,
            isSale: values.isSale,
            longDescription: values.longDescription,
            priceCurrent: values.priceCurrent,
            priceOld: values.priceOld,
            shortDescription: values.shortDescription,
            title: values.title,
            type: values.title,
            img: values.img,
          }
        );

        if (res.request.status === 200) {
          alert("Thêm sản phẩm thành công!");
        }
      } catch {
        alert("Kiểm tra lại id");
      }
    },
  });

  return (
    <div className="table-products">
      <div style={{ display: display }} className="box-add">
        <div className="closed" onClick={() => setDisplay("none")}>
          <FontAwesomeIcon className="icon-closed" icon={faXmark} />
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="box-input">
            <label htmlFor="amount-sell">Số lượng bán</label>
            <input
              id="amount-sell"
              name="amountSell"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.amountSell}
            />
          </div>

          <div className="box-input">
            <label htmlFor="brand">Nhãn hiệu</label>
            <input
              id="brand"
              name="brand"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.brand}
            />
          </div>

          <div className="box-input">
            <label htmlFor="gender">Giới tính</label>
            <input
              id="gender"
              name="gender"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.gender}
            />
          </div>

          <div className="box-input">
            <label htmlFor="id-category">id sản phẩm</label>
            <input
              id="id-category"
              name="idCategory"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.idCategory}
            />
          </div>

          <div className="box-input">
            <label htmlFor="img">Ảnh sản phẩm</label>
            <input
              id="img"
              name="img"
              type="file"
              onChange={formik.handleChange}
              value={formik.values.img}
            />
          </div>

          <div className="box-input">
            <label htmlFor="is-sale">Giảm giá</label>
            <label>
              <input
                id="is-sale"
                name="isSale"
                type="radio"
                onClick={formik.handleChange}
                value={formik.values.isSale}
              />
              True
            </label>
            <label>
              <input
                id="is-sale"
                name="isSale"
                type="radio"
                onClick={formik.handleChange}
                value={formik.values.isSale}
              />
              Fasle
            </label>
          </div>

          <div className="box-input">
            <label htmlFor="email">Mô tả đầy đủ</label>
            <input
              id="long-description"
              name="longDescription"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.longDescription}
            />
          </div>

          <div className="box-input">
            <label htmlFor="price-current">Giá hiện tại</label>
            <input
              id="price-current"
              name="priceCurrent"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.priceCurrent}
            />
          </div>

          <div className="box-input">
            <label htmlFor="email">Giá cũ</label>
            <input
              id="price-old"
              name="priceOld"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.priceOld}
            />
          </div>

          <div className="box-input">
            <label htmlFor="short-description">Mô tả ngắn</label>
            <input
              id="short-description"
              name="shortDescription"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.shortDescription}
            />
          </div>

          <div className="box-input">
            <label htmlFor="title">Tên sản phẩm</label>
            <input
              id="title"
              name="title"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
          </div>

          <div className="box-input">
            <label htmlFor="type">Kiểu</label>
            <input
              id="type"
              name="type"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.type}
            />
          </div>

          <button type="submit">Thêm</button>
        </form>
      </div>
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
