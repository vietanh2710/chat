import styled from "styled-components";
import { Col } from "antd";

export const CreateChannelContainer = styled(Col).attrs(
  (props: { data: number }) => props
)`
  position: relative;

  .header {
    cursor: text;
    position: relative;
    display: flex;
    align-items: center;
    padding: 20px;
    box-shadow: 0 7px 9px rgb(0 0 0 / 3%), 0 1px 0 rgb(0 0 0 / 3%);
    height: 77px;

    .search {
      margin-bottom: 6px;
      font-weight: 700;
      font-size: 15px;
      line-height: 20px;
      color: #000;
      padding: 0 20px;
    }

    .users-active {
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      .item {
        font-size: 15px;
        color: #000;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 6px;
        padding: 3px 8px 5px 8px;
        margin-right: 8px;
        margin-bottom: 6px;
        display: flex;
        align-items: center;

        > img {
          margin-right: 5px;
        }
      }
    }

    .icon-xmark {
      cursor: pointer;
      padding-left: 5px;
      width: 13px;
      height: 13px;
    }
  }

  .message-list {
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto;
    height: calc(100vh - 85px - 87px);
  }

  .chat {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);

    &-left {
      display: flex;
      align-items: center;
      width: 100%;
      padding-right: 20px;

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
    }

    .icon-send {
      width: 20px;
      height: 20px;
      transform: rotate(45deg);
      cursor: pointer;
    }

    .icon-smile {
      margin-right: 10px;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }
`;
