import React, { useState } from "react";
import axios from "axios";
import "./signInForm.scss";
import { useFormik } from "formik";
import GoogleLogin from "react-google-login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import LoginFacebookReact from "react-facebook-login";
import { Link, useNavigate } from "react-router-dom";

// login email
const validate = (values) => {
  const errors = {};

  if (!values.userName) {
    errors.userName = "Vui lòng nhập tên người dùng hoặc địa chỉ email";
    // } else if (
    //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.userName)
    // ) {
    // errors.userName = "Email không hợp lệ!";
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

// const componentClicked = (data) => {
//   alert("lỗi");
// };

const SignInForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      try {
        const resData = await axios.post(
          "https://hitsneaker-demo.herokuapp.com/auth/login",
          {
            password: values.password,
            username: values.userName,
          }
        );

        if (resData.request.status === 200) {
          navigate("/");
          localStorage.setItem("accessToken", resData.data.jwt);
          localStorage.setItem("isLogin", true);
        }
      } catch (err) {
        alert("Đăng nhập không thành công!");
      }
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

  const [type, setType] = useState("password");

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

        <div className="password">
          <label className="label-form" htmlFor="userName">
            Mật khẩu
            <span className="note-label"> *</span>
          </label>
          <input
            id="password"
            className="input-account"
            name="password"
            type={type}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {type === "password" ? (
            <FontAwesomeIcon
              onClick={() => setType("text")}
              className="icon-toggle-password"
              icon={faEye}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => setType("password")}
              className="icon-toggle-password"
              icon={faEyeSlash}
            />
          )}
        </div>
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

      {/* Đăng nhập bằng google và facebook */}
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
