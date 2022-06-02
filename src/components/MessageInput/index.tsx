import { FC, memo } from "react";
import ImageUploading from "react-images-uploading";
import Picker from "emoji-picker-react";
import { isEmpty, isNil } from "lodash";

import useMessageInput, { Props, ReceivedProps } from "./hook";
import {
  ATTACH_ICON,
  FOLDER_ICON,
  IMAGE_ICON,
  LIKE_ICON,
  PAPER_PLANE_ICON,
  SMILE_ICON,
  XMARK_ICON,
} from "assets";
import { MessageInputContainer } from "./style";

const MessageInputLayout: FC<Props> = ({
  formik,
  images,
  isEmoji,
  inputHeight,
  inputFileRef,
  onFileRemove,
  onUploadFile,
  onChangeFile,
  setEmoji,
  onEmojiClick,
  onUploadImg,
}) => {
  return (
    <MessageInputContainer heightInput={inputHeight}>
      <form onSubmit={formik.handleSubmit} className="chat" id="chat-wrapper">
        <div className="chat-wrapper">
          <ImageUploading multiple value={images} onChange={onUploadImg}>
            {({ onImageUpload, onImageRemove }) => {
              return (
                <div className="chat-wrapper">
                  {images.length > 0 && (
                    <div className="img-upload">
                      {images.map((item, index) => (
                        <div key={index} className="item">
                          <img
                            src={XMARK_ICON}
                            alt=""
                            className="icon-close"
                            onClick={() => onImageRemove(index)}
                          />
                          <img
                            src={item.dataURL}
                            alt=""
                            width={70}
                            height={70}
                            style={{
                              marginRight: 20,
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {formik.getFieldProps("file").value?.name && (
                    <div className="file-upload">
                      <div className="file-upload-wrapper">
                        <img src={ATTACH_ICON} alt="" />
                        <p>{formik.getFieldProps("file").value.name}</p>
                      </div>

                      <img
                        src={XMARK_ICON}
                        alt=""
                        className="icon-close"
                        onClick={onFileRemove}
                      />
                    </div>
                  )}

                  <div className="chat-input">
                    <img
                      src={SMILE_ICON}
                      alt=""
                      className="icon-smile"
                      onClick={() => setEmoji(!isEmoji)}
                    />

                    <img
                      src={IMAGE_ICON}
                      alt=""
                      className="icon-img"
                      onClick={() => {
                        setEmoji(false);
                        onImageUpload();
                      }}
                    />

                    <input
                      id="upload"
                      type="file"
                      accept=".json, .txt"
                      ref={inputFileRef}
                      onChange={onChangeFile}
                      style={{
                        display: "none",
                      }}
                    />

                    {/* <img
                      src={FOLDER_ICON}
                      alt=""
                      className="icon-folder"
                      onClick={onUploadFile}
                    /> */}

                    {isEmoji && (
                      <Picker
                        native
                        disableSkinTonePicker
                        onEmojiClick={onEmojiClick}
                        groupVisibility={{
                          animals_nature: false,
                          food_drink: false,
                          travel_places: false,
                          objects: false,
                        }}
                      />
                    )}

                    <textarea
                      placeholder="Send a message"
                      className="send"
                      rows={1}
                      id="input"
                      {...formik.getFieldProps("value")}
                      onClick={() => setEmoji(false)}
                    />

                    <div className="btn-submit">
                      <img src={LIKE_ICON} alt="" className="icon-like" />
                    </div>

                    <button
                      type="submit"
                      className="btn-submit"
                      style={{
                        cursor:
                          isEmpty(formik.getFieldProps("value").value) &&
                          isEmpty(formik.getFieldProps("images").value) &&
                          isNil(formik.getFieldProps("file").value)
                            ? "not-allowed"
                            : "pointer",
                      }}
                    >
                      <img
                        src={PAPER_PLANE_ICON}
                        alt=""
                        className="icon-send"
                      />
                    </button>
                  </div>
                </div>
              );
            }}
          </ImageUploading>
        </div>
      </form>
    </MessageInputContainer>
  );
};

const MessageInput: FC<ReceivedProps> = (props) => (
  <MessageInputLayout {...useMessageInput(props)} />
);

export default memo(MessageInput);
