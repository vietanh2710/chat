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

    .avt-img {
      border-right: 1px solid;
      padding-right: 20px;

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
        font-weight: 500;
        font-size: 15px;
        display: flex;
        align-items: center;

        > div {
          margin-left: 5px;
        }
      }

      input {
        margin-bottom: 5px;
        width: 100%;
        border: none;
        border-radius: 10px;
        width: 100%;
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
        color: #ff1e1e;
      }

      .btn-edit {
        border: 1px solid #d9d9d9;
        background-color: #4259ac;
        padding: 5px 20px;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
        margin-top: 20px;
      }
    }
  }
`;
