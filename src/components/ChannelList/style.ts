import styled from "styled-components";
import { Col } from "antd";

export const ChannelListContainer = styled(Col).attrs(
  (props: { heightWrapper: number }) => props
)`
  background-color: #fafafa;

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px;

    .text {
      margin-bottom: 0;
      font-weight: 700;
      font-size: 18px;
      line-height: 20px;
      color: #000;
    }

    .icon-edit-wrapper {
      box-shadow: 0 0 8px rgb(0 0 0 / 6%), 0 2px 30px rgb(0 0 0 / 10%);
      padding: 10px;
      border-radius: 50%;
      cursor: pointer;

      .icon-edit {
        color: rgba(0, 0, 0, 0.1);
        width: 22px;
        height: 20px;
      }
    }

    .search-wrapper {
      width: 100%;
      position: relative;

      .icon-search {
        position: absolute;
        top: 30px;
        left: 10px;
        width: 12px;
        height: 12px;
      }

      .search {
        box-shadow: 0 1px 5px rgb(0 0 0 / 7%);
        border: none;
        border-radius: 10px;
        width: 100%;
        margin-top: 18px;
        padding: 8px 10px 8px 30px;

        &:focus {
          border: none;
          outline: none;
        }
      }
    }
  }

  .channel-list {
    padding-top: 16px;
    padding-left: 20px;
    padding-right: 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    overflow-x: hidden;
    overflow-y: auto;
    height: ${(props: { heightWrapper: number }) =>
      props.heightWrapper
        ? `calc(100vh - ${50 + props.heightWrapper}px)`
        : "100vh"};

    .item {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      box-shadow: 0 1px 5px rgb(0 0 0 / 7%);
      background: #fff;
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 12px;
      cursor: pointer;

      &-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;

        .channel-image {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }

        .img-text {
          text-transform: uppercase;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 500;
          font-size: 23px;
          color: #fff;
        }
      }

      .preview {
        display: flex;
        align-items: flex-start;
        flex-direction: column;

        &-wrapper {
          display: flex;
          align-items: center;
          flex-direction: row-reverse;
        }

        .channel-name {
          margin-bottom: 0;
          font-weight: 700;
          font-size: 15px;
          line-height: 20px;
          color: #000;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 150px;
        }

        .active {
          width: 8px;
          height: 8px;
          background-color: #31a24c;
          border-radius: 50%;
          margin-right: 6px;
          margin-left: 10px;
        }

        .last-message {
          font-size: 13px;
          color: #858688;
          max-width: 200px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          margin-left: 10px;
        }
      }

      .last-time {
        font-size: 12px;
        text-align: right;
      }
    }
  }
`;
