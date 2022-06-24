import React from "react";
import "./contact.scss";
import Header from "../../components/Header/Header";
import Brands from "../../components/Brands/Brands";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contact-title">Liên hệ</h1>
      <iframe
        className="address"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3723.5074765261743!2d105.73383006531078!3d21.052384282336796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1656042788793!5m2!1svi!2s"
        width="100%"
        height="500"
        // style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="address-message">
        <div className="contact-address">
          <h2 className="contact-title border-b">Thông tin liên hệ</h2>
          <div className="container-info">
            <p>
              Liên lạc qua HOTLINE:
              <strong> 0392632576</strong>
            </p>
            <p>
              Hoặc gửi thư cho Email: HITSport@gmail.com để được tư vấn và giải
              đáp mọi thắc mắc của quý khách hàng!
            </p>
            <strong>HIT Sport - Thương hiệu giày hàng đầu Việt Nam</strong>
            <p>Showroom: 298 đường Cầu Diễn, Bắc Từ Liêm Hà Nội</p>
          </div>
        </div>
        <div className="contact-message">
          <h2 className="contact-title border-b">Gửi tin nhắn</h2>
          <input className="input-name" type="text" placeholder="Tên của bạn" />
          <input
            className="input-email"
            type="text"
            placeholder="Email của bạn"
          />
          <input className="input-message" type="text" placeholder="Tin nhắn" />
          <button className="btn-send">Gửi tin nhắn</button>
        </div>
      </div>
      <Brands />
    </div>
  );
};

export default Contact;
