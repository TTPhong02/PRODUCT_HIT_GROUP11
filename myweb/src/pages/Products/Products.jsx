import React from "react";
import "./products.scss";
import Brands from "../../components/Brands/Brands";
import Product from "../../components/Product";

const Products = () => {
  const productsHot = [
    {
      id: 1,
      sale: "50",
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp1",
    },

    {
      id: 2,
      src: "https://www.mpe.com.vn/Data/Sites/1/News/105/150223eye330swacker1jpgcroporiginal-original-1507629292709.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp2",
    },

    {
      id: 3,
      sale: "50",
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp3",
    },

    {
      id: 4,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp4",
    },

    {
      id: 5,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp5",
    },

    {
      id: 6,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp6",
    },

    {
      id: 7,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp6",
    },

    {
      id: 8,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp6",
    },

    {
      id: 9,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp6",
    },

    {
      id: 10,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp6",
    },

    {
      id: 11,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp6",
    },

    {
      id: 12,
      src: "https://congtyvanhanhtoanha.com/wp-content/uploads/2018/09/slide2-cong-ty-van-hanh-toa-nha-ha-noi-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp6",
    },
  ];

  return (
    <div>
      <div className="container-product">
        <div className="nav-page">
          <div className="link-page">
            <p className="link-prev">Trang chủ /</p>
            <p className="link-current"> Cửa hàng</p>
          </div>
          <select className="filter-product">
            <option value="" selected>
              Mới nhất
            </option>
            <option value="">Hot nhất</option>
            <option value="">Giá: Thấp &rarr; Cao</option>
            <option value="">Giá: Cao &rarr; Thấp</option>
          </select>
        </div>

        <div className="filter-products">
          <div className="option-filter">
            <select className="sort-by-price">
              <option value="" selected>
                Giá
              </option>
              <option value="">Dưới 1.000.000</option>
              <option value="">Từ 1.000.000 đến 2.000.000</option>
              <option value="">Từ 2.000.000 đến 4.000.000</option>
              <option value="">Từ 4.000.000 đến 8.000.000</option>
              <option value="">Trên 8.000.000</option>
            </select>

            <div className="title-sort">Danh mục sản phẩm</div>
            <ul className="sort-by-brand">
              <li>
                <input type="checkbox" name="" id="" />
                Boots
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                Cao gót
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                Giày da
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                Giày thể thao
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                Sneaker
              </li>
              <li>
                <input type="checkbox" name="" id="" />
                Giày bệt
              </li>
            </ul>
            <div className="title-sort">Size</div>
            <div className="sort-by-size">
              <div className="item-size">
                <input type="checkbox" name="" id="" />
                38
              </div>
              <div className="item-size">
                <input type="checkbox" name="" id="" />
                39
              </div>
              <div className="item-size">
                <input type="checkbox" name="" id="" />
                40
              </div>
              <div className="item-size">
                <input type="checkbox" name="" id="" />
                41
              </div>
              <div className="item-size">
                <input type="checkbox" name="" id="" />
                42
              </div>
              <div className="item-size">
                <input type="checkbox" name="" id="" />
                43
              </div>
            </div>
            <div className="title-sort">Màu sắc</div>
            <div className="sort-by-color">
              <div className="item-color">
                <input type="checkbox" name="" id="" />
                Đen
              </div>
              <div className="item-color">
                <input type="checkbox" name="" id="" />
                Trắng
              </div>
              <div className="item-color">
                <input type="checkbox" name="" id="" />
                Đỏ
              </div>
              <div className="item-color">
                <input type="checkbox" name="" id="" />
                Xanh
              </div>
              <div className="item-color">
                <input type="checkbox" name="" id="" />
                Cam
              </div>
              <div className="item-color">
                <input type="checkbox" name="" id="" />
                Hồng
              </div>
              <div className="item-color">
                <input type="checkbox" name="" id="" />
                Xám
              </div>
            </div>
            <div className="title-sort">Thương hiệu</div>
            <ul className="sort-by-brand">
              <li className="item-brand-filter">
                <input type="checkbox" name="" id="" />
                Nike
              </li>
              <li className="item-brand-filter">
                <input type="checkbox" name="" id="" />
                Adidas
              </li>
              <li className="item-brand-filter">
                <input type="checkbox" name="" id="" />
                Puma
              </li>
              <li className="item-brand-filter">
                <input type="checkbox" name="" id="" />
                Jordan
              </li>
            </ul>
          </div>

          <div className="list-product-filtered grid grid-cols-3 row-y-20px">
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
      </div>
      <Brands />
    </div>
  );
};

export default Products;
