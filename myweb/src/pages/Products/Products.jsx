import React from "react";
import "./products.scss";
import Brands from "../../components/Brands/Brands";
import Product from "../../components/Product";

const Products = () => {
  const productsHot = [
    {
      id: 1,
      sale: "50",
      src: "https://dqshop.vn/wp-content/uploads/2020/04/giay-sneaker-mlb-korea-boston-red-sox-nam-nu-rep-11-dep-chat-1.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp1",
    },

    {
      id: 2,
      src: "https://ordixi.com/wp-content/uploads/2022/05/0b840a43.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp2",
    },

    {
      id: 3,
      sale: "50",
      src: "http://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-855388558-1532526063.jpg?crop=1xw:1xh;center,top&resize=1200:*",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp3",
    },

    {
      id: 4,
      src: "https://saigonsneaker.com/wp-content/uploads/2018/09/sneaker-la-gi.jpeg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp4",
    },

    {
      id: 5,
      src: "https://images.unsplash.com/photo-1603787081207-362bcef7c144?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c25lYWtlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp5",
    },

    {
      id: 6,
      src: "https://ordixi.com/wp-content/uploads/2022/05/8095a455.jpeg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp6",
    },

    {
      id: 7,
      src: "https://foot.vn/wp-content/uploads/2020/09/giay-sneaker-nike-classic-cortez-nu-mau-trang-2.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp6",
    },

    {
      id: 8,
      src: "https://lzd-img-global.slatic.net/g/p/75cb9a9f07f4bede875c8541fddb3b85.jpg_360x360q75.jpg_.webp",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp6",
    },

    {
      id: 9,
      src: "https://saigonsneaker.com/wp-content/uploads/2021/10/NVTC-SS0428327-SS0428349SS0428355-5-scaled-1-350x350.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp6",
    },

    {
      id: 10,
      src: "https://giaygiare.vn/upload/sanpham/thumbs/nike-air-jordan-1-low-green-toe.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp6",
    },

    {
      id: 11,
      src: "https://fado.vn/blog/wp-content/uploads/2020/05/giay-sneaker-den-nam-tot-nhat-6.jpg",
      name: "Giày Thể Thao Nam Bitis DSM074933XAM (Xám) - Giày chính hãng",
      price: "500.000",
      slug: "sp6",
    },

    {
      id: 12,
      src: "https://chondeal247.com/wp-content/uploads/2021/10/giay-sneaker-nam-chinh-hang-10.jpg",
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
