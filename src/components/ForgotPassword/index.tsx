import React, { FC } from "react";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";

import { ARROW_LEFT_ICON } from "assets";
import { ROUTES } from "common/constant";
import useForgotPassowrd, { Props } from "./hook";
import { RegisterContainer } from "./style";

const ForgotPassowrdView: FC<Props> = ({ formik }) => {
  return (
    <RegisterContainer>
      <div className="header">
        <div className="register-wrapper">
          <Link to={ROUTES.SIGNIN}>
            <img src={ARROW_LEFT_ICON} alt="" />
          </Link>
          <p className="title">Forgot Password</p>
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

            <button
              type="submit"
              className="btn-submit"
              disabled={!isEmpty(formik.errors)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </RegisterContainer>
  );
};

const ForgotPassowrd: FC = () => (
  <ForgotPassowrdView {...useForgotPassowrd()} />
);

export default ForgotPassowrd;
