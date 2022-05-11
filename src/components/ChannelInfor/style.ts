import styled from "styled-components";
import { Col } from "antd";

export const ChannelInforContainer = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 20px;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  height: 100vh;

  .infor-img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  .name {
    font-size: 18px;
    font-weight: 700;
    margin-top: 5px;
  }

  .info-list {
    width: 100%;
    padding-top: 20px;

    .pannel-header {
      font-size: 14px;
      font-weight: 700;
    }

    .members-list {
      display: flex;
      flex-direction: column;
      font-weight: normal;

      .item {
        display: flex;
        flex-direction: row;
        font-weight: normal;
        padding-bottom: 10px;

        .user-avt {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          margin-right: 10px;
          margin-top: 4px;
        }

        .img-text {
          text-transform: uppercase;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 500;
          font-size: 16px;
          color: #fff;
          margin-right: 10px;
        }

        .user {
          &-name {
            font-size: 15px;
            font-weight: 500;
          }

          .position {
            color: #858688;
            font-size: 13px;
          }
        }
      }
    }

    .images-wrapper {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
      width: 100%;

      img {
        display: block;
        object-fit: cover;
        width: 100px;
        height: 100px;
      }
    }

    .files-wrapper {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      flex-direction: column;

      div {
        font-weight: normal;
        border-radius: 8px;
        border: 1px solid rgba(0, 0, 0, 0.08);
        padding: 5px 10px;
        font-size: 15px;
        margin-bottom: 10px;
        cursor: auto;
      }
    }
  }
`;
