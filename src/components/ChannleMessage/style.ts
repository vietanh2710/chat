import styled from "styled-components";
import { Col } from "antd";

export const ChannelMessageContainer = styled(Col).attrs(
  (props: { heightInput: number; heightContainer: number }) => props
)`
  position: relative;

  .header {
    display: flex;
    align-items: center;
    padding: 20px;
    box-shadow: 0 7px 9px rgb(0 0 0 / 3%), 0 1px 0 rgb(0 0 0 / 3%);

    .header-channel-img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }

    .text {
      margin-bottom: 0;
      font-weight: 700;
      font-size: 15px;
      line-height: 20px;
      color: #000;
      padding-left: 10px;
    }

    .icon-info {
      width: 20px;
      height: 20px;
      margin-right: 0;
      margin-left: auto;
      cursor: pointer;
    }
  }

  .message-list {
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto;
    /* height: ${(props: { heightContainer: number }) =>
      `${props.heightContainer}px`}; */
    height: 82vh;

    .time {
      display: block;
      text-align: center;
      overflow: hidden;
      white-space: nowrap;
      font-size: 14px;
      font-weight: 600;
      padding-top: 18px;

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

    .item {
      padding-top: 18px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      cursor: pointer;

      &.owner {
        align-items: flex-end;

        .user-avt {
          display: none;
        }

        .message {
          margin-right: 0;
          margin-left: 50px;
        }
      }

      &-wrapper {
        display: flex;
        align-items: flex-start;

        .user-avt {
          width: 30px;
          height: 30px;
        }

        .message {
          border-radius: 8px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          padding: 5px 10px;
          display: block;
          margin-left: 10px;
          font-size: 15px;
          margin-right: 50px;
        }
      }

      .message-time {
        font-size: 11px;
        margin-top: 5px;
        color: #858688;
        font-weight: 500;

        > span {
          font-weight: 600;
        }
      }
    }
  }

  .chat {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    position: sticky;
    bottom: 0;

    &-wrapper {
      position: relative;
      width: 100%;
      display: flex;
      flex-direction: column;
      width: 100%;

      .img-upload {
        display: flex;
        align-items: center;
        overflow-x: auto;
        padding-top: 10px;

        .item {
          position: relative;
          margin-bottom: 12px;
        }

        .icon-close {
          width: 22px;
          height: 22px;
          position: absolute;
          right: 10px;
          top: -10px;
          background-color: #f2f1f0;
          border-radius: 50%;
          padding: 3px;
          cursor: pointer;
        }
      }

      .chat-input {
        display: flex;
        align-items: center;
        width: 100%;
      }

      .send {
        box-shadow: 0 1px 5px rgb(0 0 0 / 7%);
        border: none;
        border-radius: 10px;
        width: 100%;
        padding: 12px 20px;

        &:focus {
          border: none;
          outline: none;
        }
      }

      .icon-send {
        width: 20px;
        height: 20px;
        margin-left: 20px;
        transform: rotate(45deg);
        cursor: pointer;
      }

      .btn-submit {
        background-color: transparent;
        border: none;
      }

      .icon-smile,
      .icon-img {
        margin-right: 15px;
        width: 20px;
        height: 20px;
        cursor: pointer;
      }

      textarea {
        resize: none;
        height: ${(props: { heightInput: number }) =>
          `${props.heightInput > 100 ? 100 : props.heightInput}px`};
      }
    }

    .emoji-picker-react {
      width: 300px;
      position: absolute;
      left: 50px;
      bottom: 0px;

      .emoji-categories {
        justify-content: space-evenly;
      }
    }
  }
`;
