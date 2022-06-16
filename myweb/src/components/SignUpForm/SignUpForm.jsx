import { useFormik } from "formik";
import React from "react";
import "./signUpForm.scss";

const validate = (values) => {
  const errors = {};
  if (!values.userName) {
    errors.userName = "Vui lòng nhập tên tài khoản";
  } else if (values.userName.length < 6) {
    errors.userName = "Vui lòng nhập tên tài khoản tối thiểu 6 kí tự";
  }

  if (!values.email) {
    errors.email = "Vui lòng nhập email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Email không hợp lệ";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "Vui lòng nhập số điện thoại";
  } else if (
    !/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/.test(
      values.phoneNumber
    )
  ) {
    errors.phoneNumber = "Số điện thoại không hợp lệ";
  }

  if (!values.fullName) {
    errors.fullName = "Vui lòng nhập họ và tên";
  }

  if (!values.password) {
    errors.password = "Vui lòng nhập mật khẩu";
  } else if (
    !/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
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
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      phoneNumber: "",
      fullName: "",
      password: "",
      enterPassword: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="sign-up">
      <h2 className="title-sign-up">Đăng ký tài khoản</h2>
      <form className="form-sign-up" onSubmit={formik.handleSubmit}>
        <label className="label-form" htmlFor="userName">
          Tên tài khoản
          <span className="note-label"> *</span>
        </label>
        <input
          id="userName"
          className="input-account"
          name="userName"
          onChange={formik.handleChange}
          value={formik.values.userName}
          type="text"
        />
        {formik.errors.userName ? (
          <div className="errors-form">{formik.errors.userName}</div>
        ) : null}

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

        <label className="label-form" htmlFor="phoneNumber">
          Số điện thoại
          <span className="note-label"> *</span>
        </label>
        <input
          id="phoneNumber"
          className="input-account"
          name="phoneNumber"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
          type="text"
        />
        {formik.errors.phoneNumber ? (
          <div className="errors-form">{formik.errors.phoneNumber}</div>
        ) : null}

        <label className="label-form" htmlFor="fullName">
          Họ và tên
          <span className="note-label"> *</span>
        </label>
        <input
          id="fullName"
          className="input-account"
          name="fullName"
          onChange={formik.handleChange}
          value={formik.values.fullName}
          type="text"
        />
        {formik.errors.fullName ? (
          <div className="errors-form">{formik.errors.fullName}</div>
        ) : null}

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
          <input type="checkbox" name="accept-rules" id="accept-rules" />
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
    </div>
  );
};

export default SignUpForm;
