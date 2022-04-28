import styled from "styled-components";

export const CommonLayoutContainer = styled.div`
  padding: 100px 0;
  margin: 0 auto;
  max-width: 550px;

  .header {
    .title {
      font-size: 30px;
      font-weight: 600;
      color: rgb(14, 14, 14);
    }

    .register {
      color: #969696;
      font-weight: 500;
      font-size: 13px;
      padding-bottom: 30px;

      a {
        text-decoration: underline;
        color: rgb(14, 14, 14);
        font-weight: 600;
      }
    }
  }

  .form-login {
    .text {
      display: block;
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 5px;
      margin-top: 25px;
    }

    .input {
      width: 100%;
      border: none;
      border-radius: 10px;
      width: 100%;
      height: 52px;
      padding: 0 20px;
      background-color: #f4f4f4;

      &.error {
        border: 1px solid #ff1e1e;
        margin-bottom: 5px;
        color: #000;

        &:focus {
          border: 1px solid #ff1e1e;
        }
      }

      &:focus {
        border: none;
        outline: none;
      }
    }

    .error-text {
      color: #ff1e1e;
    }

    .password {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-end;

      a {
        font-weight: 500;
        font-size: 13px;
        color: rgb(14, 14, 14);
        text-decoration: underline;
        margin-bottom: 5px;
      }
    }

    .checkbox {
      display: flex;
      align-items: center;
      margin-top: 20px;
      margin-bottom: 35px;

      input[type="checkbox"] {
        transform: scale(1.2);
      }

      input {
        margin-right: 10px;
        margin-left: 2px;
        cursor: pointer;
      }

      label {
        font-size: 14px;
        color: #969696;
        font-weight: 500;
      }
    }

    .btn-submit {
      cursor: pointer;
      border: none;
      width: 100%;
      background-color: #fff;
      font-weight: 600;
      font-size: 16px;
      border: 1px solid;
      border-radius: 5px;
      padding: 15px;
      background-color: #4259ac;
      color: #fff;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .third-login {
    display: block;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    font-size: 14px;
    font-weight: 600;
    color: #969696;
    padding-top: 40px;

    & > span {
      position: relative;
      display: inline-block;
    }

    & > span:before,
    & > span:after {
      content: "";
      position: absolute;
      top: 50%;
      width: 9999px;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }

    & > span:before {
      right: 100%;
      margin-right: 15px;
    }

    & > span:after {
      left: 100%;
      margin-left: 15px;
    }
  }

  .btn-login-wrapper {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    .btn-third-login {
      cursor: pointer;
      background-color: #fff;
      border: 1px solid;
      border-radius: 5px;
      width: 150px;
      padding: 10px 0;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 25px;
        height: 25px;
        margin-right: 6px;
      }

      > div {
        font-weight: 600;
        font-size: 16px;
      }

      &:nth-child(1) {
        border: 1.5px solid #ff3737;
        margin-right: 20px;
      }

      &:nth-child(2) {
        border: 1.5px solid #00f;
      }
    }
  }
`;
