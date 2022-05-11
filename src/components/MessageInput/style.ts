import styled from "styled-components";

export const MessageInputContainer = styled.div.attrs(
  (props: { heightInput: number }) => props
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

      .file-upload {
        border-radius: 8px;
        border: 1px solid rgba(0, 0, 0, 0.08);
        padding: 6px 10px 2px;
        margin-bottom: 12px;
        width: fit-content;
        position: relative;

        .icon-close {
          width: 22px;
          height: 22px;
          position: absolute;
          right: -16px;
          top: -10px;
          background-color: #f2f1f0;
          border-radius: 50%;
          padding: 3px;
          cursor: pointer;
        }

        &-wrapper {
          display: inline-flex;
          align-items: center;

          p {
            font-weight: 500;
          }
        }

        img {
          margin-top: 3px;
          width: 18px;
          height: 18px;
          transform: rotate(90deg);
          margin-right: 5px;
        }
      }

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
        transform: rotate(45deg);
      }

      .icon-like {
        margin-left: 15px;
        width: 25px;
        height: 25px;
        cursor: pointer;
      }

      .btn-submit {
        background-color: transparent;
        border: none;
      }

      .icon-smile,
      .icon-img,
      .icon-folder {
        margin-right: 15px;
        width: 25px;
        height: 25px;
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
