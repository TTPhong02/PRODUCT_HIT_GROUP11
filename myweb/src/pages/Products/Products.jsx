import React, { useEffect, useState } from "react";
import axios from "axios";
import "./products.scss";
import Brands from "../../components/Brands/Brands";
import Product from "../../components/Product";

const Products = () => {
  const listCheckCategory = [
    {
      id: 1,
      name: "Boots",
      value: "Boots",
    },

    {
      id: 2,
      name: "Cao gót",
      value: "Cao gót",
    },

    {
      id: 3,
      name: "Giày da",
      value: "Giày da",
    },

    {
      id: 4,
      name: "Giày thể thao",
      value: "Giày thể thao",
    },

    {
      id: 5,
      name: "Sneaker",
      value: "Sneaker",
    },

    {
      id: 6,
      name: "Giày bệt",
      value: "Giày bệt",
    },
  ];

  const listSize = [
    { id: 1, size: 38 },
    { id: 2, size: 39 },
    { id: 3, size: 40 },
    { id: 4, size: 41 },
    { id: 5, size: 42 },
    { id: 6, size: 43 },
  ];

  const listBrand = [
    { id: 1, brand: "Nike", value: "nike" },
    { id: 2, brand: "Adidas", value: "adidas" },
    { id: 3, brand: "Puma", value: "puma" },
    { id: 4, brand: "Jordan", value: "jordan" },
  ];

  const listColor = [
    { id: 1, name: "Đen", value: "black" },
    { id: 2, name: "Đỏ", value: "red" },
    { id: 3, name: "Cam", value: "orange" },
    { id: 4, name: "Xám", value: "grey" },
    { id: 5, name: "Trắng", value: "white" },
    { id: 6, name: "Xanh", value: "blue" },
    { id: 7, name: "Hồng", value: "pink" },
  ];
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("new");
  const fetchProduct = async (value) => {
    try {
      const res = await axios.get(
        `https://test-sp-hit.herokuapp.com/api/v1/products/sort?by=${value}`
      );
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Sắp xếp theo yêu cầu
  const handleSort = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    fetchProduct(sort);
  }, [sort]);

  // Lọc theo yêu cầu
  let url = new URL(
    "https://test-sp-hit.herokuapp.com/api/v1/products/filters?brand=&color=&size=0&type="
  );

  const [urlNew, setUrlNew] = useState(url);
  const productSort = async (url) => {
    try {
      const res = await axios.post(url);
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSortCategory = (e) => {
    if (e.target.checked) {
      urlNew.searchParams.append("type", e.target.value);
      productSort(url);
      setUrlNew(() => {
        return urlNew;
      });
    } else {
      urlNew.searchParams.set("type", "");
      fetchProduct(sort);
      setUrlNew(() => {
        return urlNew;
      });
    }
  };

  const handleSize = (e) => {
    if (e.target.checked) {
      urlNew.searchParams.append("size", e.target.value);
      productSort(url);
      setUrlNew(() => {
        return urlNew;
      });
    } else {
      urlNew.searchParams.set("size", "");
      fetchProduct(sort);
      setUrlNew(() => {
        return urlNew;
      });
    }
  };

  const handleBrand = (e) => {
    if (e.target.checked) {
      urlNew.searchParams.append("brand", e.target.value);
      productSort(urlNew);
      setUrlNew(() => {
        return urlNew;
      });
    } else {
      urlNew.searchParams.set("brand", "");
      fetchProduct(sort);
      setUrlNew(() => {
        return urlNew;
      });
    }
  };

  const handleColor = (e) => {
    if (e.target.checked) {
      urlNew.searchParams.append("color", e.target.value);
      productSort(urlNew);
      setUrlNew(() => {
        return urlNew;
      });
    } else {
      url.searchParams.set("color", "");
      fetchProduct(sort);
      setUrlNew(() => {
        return urlNew;
      });
    }
  };

  return (
    <div>
      <div className="container-product">
        <div className="nav-page">
          <div className="link-page">
            <p className="link-prev">Trang chủ /</p>
            <p className="link-current"> Cửa hàng</p>
          </div>
          <select className="filter-product" onChange={handleSort}>
            <option
              value="new"
              defaultValue={{ label: "Mới nhất", value: "new" }}
            >
              Mới nhất
            </option>
            <option value="hot">Hot nhất</option>
            <option value="price-asc">Giá: Thấp &rarr; Cao</option>
            <option value="price-des">Giá: Cao &rarr; Thấp</option>
          </select>
        </div>

        <div className="filter-products">
          <div className="option-filter">
            <select className="sort-by-price">
              <option value="" defaultValue={{ label: "Giá", value: "" }}>
                Giá
              </option>
              <option value="">Dưới 1.000.000</option>
              <option value="">Từ 1.000.000 đến 2.000.000</option>
              <option value="">Từ 2.000.000 đến 4.000.000</option>
              <option value="">Từ 4.000.000 đến 8.000.000</option>
              <option value="">Trên 8.000.000</option>
            </select>

            <div className="title-sort">Danh mục sản phẩm</div>
            <form action="" onClick={handleSortCategory}>
              <ul className="sort-by-brand">
                {listCheckCategory.map((item) => (
                  <li key={item.id}>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      value={item.value}
                      onClick={handleSortCategory}
                    />
                    {item.name}
                  </li>
                ))}
              </ul>
            </form>
            <div className="title-sort">Size</div>
            <div className="sort-by-size">
              {listSize.map((item) => (
                <div className="item-size">
                  <input
                    key={item.id}
                    type="checkbox"
                    name=""
                    id=""
                    value={item.size}
                    onClick={handleSize}
                  />
                  {item.size}
                </div>
              ))}
            </div>
            <div className="title-sort">Màu sắc</div>
            <div className="sort-by-color">
              {listColor.map((item) => (
                <div key={item.id} className="item-color">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    value={item.value}
                    onClick={handleColor}
                  />
                  {item.name}
                </div>
              ))}
            </div>
            <div className="title-sort">Thương hiệu</div>
            <ul className="sort-by-brand">
              {listBrand.map((item) => (
                <li key={item.id} className="item-brand-filter">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    value={item.value}
                    onClick={handleBrand}
                  />
                  {item.brand}
                </li>
              ))}
            </ul>
          </div>

          <div className="list-product-filtered grid grid-cols-3 row-y-20px">
            {products.length > 0 ? (
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
              <div className="img-empty col-span-3">
                <img
                  src="https://taphoa.cz/static/media/cart-empty-img.8b677cb3.png"
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <Brands />
    </div>
  );
};

export default Products;
