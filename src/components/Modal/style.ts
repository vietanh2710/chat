import styled from "styled-components";
import { Modal } from "antd";

export const ModalWrapper = styled(Modal)`
  .ant-modal-content {
    border-radius: 6px;
  }

  .ant-modal-footer {
    display: flex;
    justify-content: space-between;

    button {
      border: 1px solid #d9d9d9;
      background-color: #fff;
      padding: 5px 20px;
      border-radius: 5px;
      cursor: pointer;

      &:nth-child(2) {
        background-color: #4259ac;
        color: #fff;
      }
    }
  }

  /* Profle */
  .profile {
    display: flex;
    justify-content: inherit;
    flex-direction: row;
    flex-wrap: wrap;

    .avt-img {
      padding-right: 15px;

      img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 50%;
        border: 2px solid #d9d9d9;
        padding: 4px;
      }
    }

    .content {
      padding-left: 20px;
      width: 100%;
      flex: 1;

      label {
        width: 100%;
        margin-bottom: 5px;
        font-weight: 700;
        font-size: 15px;
        display: flex;
        align-items: center;
        margin-top: 20px;

        > span {
          color: #ff1e1e;
          margin-right: 5px;
        }

        > div {
          margin-left: 5px;
          font-weight: 400;
        }

        &:nth-child(1) {
          margin-top: 0;
        }
      }

      input {
        width: 100%;
        border: none;
        border-radius: 10px;
        height: 45px;
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
        padding-top: 3px;
        color: #ff1e1e;
      }
    }

    .btn-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 30px;
      border-top: 1.5px solid #f0f0f0;
      padding-top: 20px;
      width: 100%;

      .btn-submit {
        border: none;
        background-color: #4259ac;
        padding: 10px 20px;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
        font-weight: 500;

        &.disable {
          background-color: #ececec;
          color: #000;
          cursor: not-allowed;
        }
      }

      .btn-cancel {
        border: 1px solid #d9d9d9;
        background-color: #fff;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 500;
      }
    }
  }
`;
