import React, { FC } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "common/constant";
import useLogin, { Props } from "./hook";
import { LoginContainer } from "./style";
import { FACEBOOK_ICON, GOOGLE_ICON } from "assets";

const LoginView: React.FC<Props> = ({ formik, signIn }) => {
  return (
    <LoginContainer>
      <div className="header">
        <p className="title">Login</p>
        <div className="register">
          Doesn&apos;t have an account yet?{" "}
          <Link to={ROUTES.REGISTER}>Register</Link>
        </div>
      </div>

      <div className="form-login">
        <form onSubmit={formik.handleSubmit}>
          <label className="text">Email Address</label>
          <input
            type="text"
            className={`input ${
              formik.errors.email && formik.touched.email && "error"
            }`}
            {...formik.getFieldProps("email")}
          />
          {formik.errors.email && formik.touched.email && (
            <p className="error-text">{formik.errors.email}</p>
          )}

          <div className="password">
            <label className="text">Password</label>
            <Link to={ROUTES.FORGOT_PASSWORD}>Forgot Password?</Link>
            <input
              type="text"
              className={`input ${
                formik.errors.password && formik.touched.password && "error"
              }`}
              {...formik.getFieldProps("password")}
            />
            {formik.errors.password && formik.touched.password && (
              <p className="error-text">{formik.errors.password}</p>
            )}
          </div>

          <div className="checkbox">
            <input
              type="checkbox"
              id="remember"
              {...formik.getFieldProps("remember")}
            />
            <label>Remeber me</label>
          </div>

          <button type="submit" className="btn-submit">
            Login
          </button>
        </form>

        <div className="third-login">
          <span>or Login with</span>
        </div>

        <div className="btn-login-wrapper">
          <button className="btn-third-login" onClick={signIn}>
            <img src={GOOGLE_ICON} alt="" />
            <div>Google</div>
          </button>
          <button className="btn-third-login">
            <img src={FACEBOOK_ICON} alt="" />
            <div>Facebook</div>
          </button>
        </div>
      </div>
    </LoginContainer>
  );
};

const Login: FC = () => <LoginView {...useLogin()} />;

export default Login;
