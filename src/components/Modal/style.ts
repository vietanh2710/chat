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
    flex-direction: column;

    .avt-img {
      margin-bottom: 20px;

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

      label {
        width: 100%;
        margin-bottom: 5px;
        font-weight: 700;
        font-size: 15px;
        display: flex;
        align-items: center;
        margin-top: 20px;

        &:nth-child(1) {
          margin-top: 0;
        }

        > div {
          margin-left: 5px;
          font-weight: 400;
        }
      }

      input {
        width: 100%;
        border: none;
        border-radius: 10px;
        height: 45px;
        padding: 0 20px;
        background-color: #f4f4f4;

        &:focus {
          border: none;
          outline: none;
        }
      }
    }

    .btn-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 30px;
      border-top: 1.5px solid #f0f0f0;
      padding-top: 20px;

      .btn-submit {
        border: 1px solid #d9d9d9;
        background-color: #4259ac;
        padding: 10px 20px;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;

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
      }
    }
  }
`;
