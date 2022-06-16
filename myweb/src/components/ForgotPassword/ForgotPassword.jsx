import React from "react";
import "./forgotPassword.scss";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.userName) {
    errors.userName = "Vui lòng nhập tên người dùng hoặc địa chỉ email";
  } else if (values.userName.length < 8) {
    errors.userName = "Tên tài khoản ít nhất 8 ký tự!";
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(values.userName)) {
    errors.userName = "Email không hợp lệ!";
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

  return errors;
};

const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="sign-in">
      <h2 className="title-sign-in">Quên mật khẩu</h2>
      <form className="form-sign-in" onSubmit={formik.handleSubmit}>
        <label className="label-form" htmlFor="userName">
          Nhập tài khoản người dùng
          <span className="note-label"> *</span>
        </label>
        <input
          id="userName"
          className="input-account"
          name="userName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.userName}
        />
        {formik.errors.userName ? (
          <div className="errors-form">{formik.errors.userName}</div>
        ) : null}

        <label className="label-form" htmlFor="passWord">
          Nhập mật khẩu mới
          <span className="note-label"> *</span>
        </label>
        <input
          id="password"
          className="input-account"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <div className="errors-form">{formik.errors.password}</div>
        ) : null}

        <button
          className="btn-submit"
          type="submit"
          onSubmit={formik.handleSubmit}
        >
          Gửi xác nhận
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
