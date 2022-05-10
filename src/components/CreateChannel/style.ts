import styled from "styled-components";
import { Col } from "antd";

export const CreateChannelContainer = styled(Col)`
  position: relative;

  .create-channel {
    cursor: text;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;

    .search {
      width: 100%;
      margin-bottom: 5px;
      font-weight: 700;
      font-size: 15px;
      display: flex;
      align-items: center;
      margin-top: 20px;
    }

    .users-active {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;

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
      }
    }

    .icon-xmark {
      cursor: pointer;
      padding-left: 5px;
      width: 13px;
      height: 13px;
    }
  }
`;
