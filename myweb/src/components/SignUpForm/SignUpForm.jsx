import React, { useState } from "react";
import "./signUpForm.scss";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Vui lòng nhập tên tài khoản";
  } else if (values.username.length < 6) {
    errors.username = "Vui lòng nhập tên tài khoản tối thiểu 6 kí tự";
  }

  if (!values.email) {
    errors.email = "Vui lòng nhập email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Email không hợp lệ";
  }

  if (!values.phone) {
    errors.phone = "Vui lòng nhập số điện thoại";
  } else if (
    !/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/.test(
      values.phone
    )
  ) {
    errors.phone = "Số điện thoại không hợp lệ";
  }

  if (!values.firstName) {
    errors.firstName = "Vui lòng nhập họ";
  }

  if (!values.lastName) {
    errors.lastName = "Vui lòng nhập tên";
  }

  if (!values.gender) {
    errors.gender = "Vui lòng chọn giới tính";
  }

  if (!values.password) {
    errors.password = "Vui lòng nhập mật khẩu";
  } else if (
    !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      values.password
    )
  ) {
    errors.password =
      "Mật khẩu phải chứa ít nhất 8 ký tự, 1 ký tự in Hoa, 1 ký tự đặc biệt, 1 ký tự số";
  }

  if (!values.enterPassword) {
    errors.enterPassword = "Vui lòng xác nhận lại mật khẩu";
  } else if (values.enterPassword !== values.password) {
    errors.enterPassword = "Mật khẩu không trùng khớp";
  }

  return errors;
};

const SignUpForm = () => {
  const [accept, setAccept] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      gender: "",
      lastName: "",
      password: "",
      phone: "",
      username: "",
      enterPassword: "",
    },
    validate,
    onSubmit: async (values) => {
      try {
        if (accept) {
          const resData = await axios.post(
            "https://hitsneaker-demo.herokuapp.com/api/v1/users/register",
            {
              username: values.username,
              email: values.email,
              phone: values.phone,
              firstName: values.gender,
              lastName: values.lastName,
              gender: values.gender,
              password: values.password,
            }
          );

          if (resData.request.status === 200) {
            alert("Đăng ký thành công");
          }
        } else {
          alert("Bạn chưa đồng ý với các điều khoản của chúng tôi");
        }
      } catch (err) {
        alert("Đăng ký không thành công");
        console.log(err);
      }
      // console.log(values);
    },
  });

  return (
    <div className="sign-up">
      <h2 className="title-sign-up">Đăng ký tài khoản</h2>
      <form className="form-sign-up" onSubmit={formik.handleSubmit}>
        {/* Tên tài khoản */}
        <label className="label-form" htmlFor="username">
          Tên tài khoản
          <span className="note-label"> *</span>
        </label>
        <input
          id="username"
          className="input-account"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
          type="text"
        />
        {formik.errors.username ? (
          <div className="errors-form">{formik.errors.username}</div>
        ) : null}

        {/* email */}
        <label className="label-form" htmlFor="email">
          Email đăng ký
          <span className="note-label"> *</span>
        </label>
        <input
          id="email"
          className="input-account"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          type="email"
        />
        {formik.errors.email ? (
          <div className="errors-form">{formik.errors.email}</div>
        ) : null}

        {/* Số điện thoại */}
        <label className="label-form" htmlFor="phone">
          Số điện thoại
          <span className="note-label"> *</span>
        </label>
        <input
          id="phone"
          className="input-account"
          name="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
          type="text"
        />
        {formik.errors.phone ? (
          <div className="errors-form">{formik.errors.phone}</div>
        ) : null}

        {/* Họ tên */}
        <div className="full-name">
          <div className="box-input-last-name">
            <label className="label-form" htmlFor="fullName">
              Họ
              <span className="note-label"> *</span>
            </label>
            <input
              id="lastName"
              className="input-name"
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              type="text"
            />
            {formik.errors.lastName ? (
              <div className="errors-form">{formik.errors.lastName}</div>
            ) : null}
          </div>

          <div className="box-input-first-name">
            <label className="label-form" htmlFor="fullName">
              Tên
              <span className="note-label"> *</span>
            </label>
            <input
              id="firstName"
              className="input-name"
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              type="text"
            />
            {formik.errors.firstName ? (
              <div className="errors-form">{formik.errors.firstName}</div>
            ) : null}
          </div>
        </div>

        {/* Giới tính */}
        <div className="input-gender">
          <label className="select-gender">
            <input
              type="radio"
              name="gender"
              // value="male"
              value={(formik.values.gender = "male")}
              onChange={formik.handleChange}
            />
            <span>Nam</span>
          </label>
          <label className="select-gender">
            <input
              type="radio"
              name="gender"
              // value="female"
              value={(formik.values.gender = "female")}
              onChange={formik.handleChange}
            />
            <span>Nữ</span>
          </label>
        </div>
        {formik.errors.gender ? (
          <div className="errors-form">{formik.errors.gender}</div>
        ) : null}

        {/* Mật khẩu */}
        <label className="label-form" htmlFor="password">
          Mật khẩu
          <span className="note-label"> *</span>
        </label>
        <input
          id="password"
          className="input-account"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          type="password"
        />
        {formik.errors.password ? (
          <div className="errors-form">{formik.errors.password}</div>
        ) : null}

        {/* Nhập lại mật khẩu */}
        <label className="label-form" htmlFor="password">
          Nhập lại mật khẩu
          <span className="note-label"> *</span>
        </label>
        <input
          id="enterPassword"
          className="input-account"
          name="enterPassword"
          onChange={formik.handleChange}
          value={formik.values.enterPassword}
          type="password"
        />
        {formik.errors.enterPassword ? (
          <div className="errors-form">{formik.errors.enterPassword}</div>
        ) : null}

        <div className="accept-rules">
          <input
            checked={accept}
            onClick={() => setAccept(!accept)}
            type="checkbox"
            name="accept-rules"
            id="accept-rules"
          />
          <span className="">
            Tôi đồng ý với các điều khoản sử dụng dịch vụ.
            <a href="">Chi tiết</a>
          </span>
        </div>

        <button
          className="btn-submit"
          type="submit"
          onSubmit={formik.handleSubmit}
        >
          Đăng ký
        </button>
      </form>
      <p className="to-sign-in">
        Đã có tài khoản?
        <Link className="link-sign-in" to="/signIn">
          Đăng nhập ngay
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
