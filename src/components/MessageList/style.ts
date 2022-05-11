import styled from "styled-components";
import { Col } from "antd";

export const MessageListContainer = styled(Col).attrs(
  (props: { heightWrapper: number }) => props
)`
  position: relative;

  .header {
    display: flex;
    align-items: center;
    padding: 20px;
    height: 75px;
    box-shadow: 0 7px 9px rgb(0 0 0 / 3%), 0 1px 0 rgb(0 0 0 / 3%);

    .header-channel-img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }

    .header-img-text {
      text-transform: uppercase;
      border-radius: 50%;
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      font-size: 20px;
      color: #fff;
    }

    .text {
      margin-bottom: 0;
      font-weight: 700;
      font-size: 15px;
      line-height: 20px;
      color: #000;
      margin-left: 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      /* max-width: 600px; */
    }

    .icon-info {
      width: 25px;
      height: 25px;
      margin-right: 0;
      margin-left: auto;
      cursor: pointer;
    }
  }

  .message-list {
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto;
    height: ${(props: { heightWrapper: number }) =>
      `calc(100vh - ${85 + props.heightWrapper}px)`};

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

      &.user {
        align-items: flex-end;

        .user-avt,
        .img-text {
          display: none;
        }

        .message {
          align-items: flex-end;

          &-wrapper {
            margin-right: 0;
            margin-left: 50px;
          }
        }
      }

      &-wrapper {
        display: flex;
        align-items: flex-start;

        .img-text {
          text-transform: uppercase;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 500;
          border-radius: 50%;
          color: #fff;
          font-size: 16px;
        }

        .user-avt {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }

        .message-img {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 10px;

          img {
            width: 100px;
            height: 100px;
            display: block;
            object-fit: cover;
            margin-left: 10px;
          }
        }

        .message {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;

          &-wrapper {
            border-radius: 8px;
            border: 1px solid rgba(0, 0, 0, 0.08);
            padding: 5px 10px;
            display: block;
            font-size: 15px;
            margin-left: 10px;
            margin-right: 50px;
            cursor: auto;
          }
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
`;
