import React from "react";
import "./signInForm.scss";

import { useFormik } from "formik";
import GoogleLogin from "react-google-login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { google } from "fontawesome";
import LoginFacebookReact from "react-facebook-login";
import { Link } from "react-router-dom";

// login email
const validate = (values) => {
  const errors = {};

  if (!values.userName) {
    errors.userName = "Vui lòng nhập tên người dùng hoặc địa chỉ email";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.userName)
  ) {
    errors.userName = "Email không hợp lệ!";
  } else if (values.userName.length < 8) {
    errors.userName = "Tên tài khoản ít nhất 8 ký tự!";
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

// login facebook
const responseFacebook = (response) => {
  alert("Trạng thái: ", response);
};

const componentClicked = (data) => {
  alert("lỗi");
};

const SignInForm = () => {
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

  const clientId =
    "1098893047515-pa59vs62ouon8n66vkb884oab9fbt1ot.apps.googleusercontent.com";
  const appId = "3169321679997369";
  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS ! Current user: ", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("LOGIN FAILED! res: ", res);
  };

  return (
    <div className="sign-in">
      <h2 className="title-sign-in">Đăng Nhập</h2>
      <form className="form-sign-in" onSubmit={formik.handleSubmit}>
        <label className="label-form" htmlFor="userName">
          Tên tài khoản hoặc địa chỉ email
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

        <label className="label-form" htmlFor="userName">
          Mật khẩu
          <span className="note-label"> *</span>
        </label>
        <input
          id="password"
          className="input-account"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.passWord}
        />
        {formik.errors.password ? (
          <div className="errors-form">{formik.errors.password}</div>
        ) : null}
        <div className="save-account">
          <input type="checkbox" name="save-account" id="save-account" />
          <span>Ghi nhớ mật khẩu</span>
        </div>

        <button
          className="btn-submit"
          type="submit"
          onSubmit={formik.handleSubmit}
        >
          Đăng nhập
        </button>
      </form>
      <div className="form-help">
        <Link className="next-page" to="/forgotPassword">
          Quên mật khẩu
        </Link>
        <Link className="next-page" to="/signUp">
          Chưa có tài khoản? Đăng ký ngay
        </Link>
      </div>
      <div className="sign-in-more">
        <p>hoặc đăng nhập bằng</p>
        <div className="login-social">
          <LoginFacebookReact
            className="kep-login-facebook"
            appId={appId}
            redirectUrl={"Your redirect url"}
            appSecret={"Your app secret"}
            fields="email,first_name,last_name,picture.type(large)"
            responseFacebook={responseFacebook}
            icon="fa-facebook"
            textButton=""
          />
          <br />
          <GoogleLogin
            className="google-login"
            clientId={clientId}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy="single_host_origin"
          ></GoogleLogin>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
