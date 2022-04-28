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
    /* height: calc(100vh - 172px - 85px); */

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
          cursor: auto;
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
