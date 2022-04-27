import React, { FC } from "react";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";

import { ARROW_LEFT_ICON, FACEBOOK_ICON, GOOGLE_ICON } from "assets";
import { ROUTES } from "common/constant";
import useRegister, { Props } from "./hook";
import { RegisterContainer } from "./style";

const RegisterView: FC<Props> = ({ formik }) => {
  return (
    <RegisterContainer>
      <div className="header">
        <div className="register-wrapper">
          <Link to={ROUTES.SIGNIN}>
            <img src={ARROW_LEFT_ICON} alt="" />
          </Link>
          <p className="title">Register</p>
        </div>

        <div className="form-login">
          <form onSubmit={formik.handleSubmit}>
            <label className="text">Email Address</label>
            <input
              type="text"
              className={`input ${formik.errors.email && "error"}`}
              {...formik.getFieldProps("email")}
            />
            {formik.errors.email && (
              <p className="error">{formik.errors.email}</p>
            )}

            <label className="text">Password</label>
            <input
              type="text"
              className={`input ${formik.errors.password && "error"}`}
              {...formik.getFieldProps("password")}
            />
            {formik.errors.password && (
              <p className="error">{formik.errors.password}</p>
            )}

            <label className="text">Confirm password</label>
            <input
              type="text"
              className={`input ${formik.errors.confirm_password && "error"}`}
              {...formik.getFieldProps("confirm_password")}
            />
            {formik.errors.confirm_password && (
              <p className="error">{formik.errors.confirm_password}</p>
            )}

            <button
              type="submit"
              className="btn-submit"
              disabled={!isEmpty(formik.errors)}
            >
              Register
            </button>
          </form>

          <div className="third-login">
            <span>or Login with</span>
          </div>

          <div className="btn-login-wrapper">
            <button className="btn-third-login">
              <img src={GOOGLE_ICON} alt="" /> <div>Google</div>
            </button>
            <button className="btn-third-login">
              <img src={FACEBOOK_ICON} alt="" /> <div>Facebook</div>
            </button>
          </div>
        </div>
      </div>
    </RegisterContainer>
  );
};

const Register: FC = () => <RegisterView {...useRegister()} />;

export default Register;
