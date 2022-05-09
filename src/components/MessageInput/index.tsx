import { FC, memo } from "react";
import ImageUploading from "react-images-uploading";
import Picker from "emoji-picker-react";

import useMessageInput, { Props, ReceivedProps } from "./hook";
import {
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
                      type="file"
                      accept="video/*, .pdf, .json, .zip"
                      ref={inputFileRef}
                      onChange={onChangeFile}
                      style={{
                        display: "none",
                      }}
                    />

                    <img
                      src={FOLDER_ICON}
                      alt=""
                      className="icon-folder"
                      onClick={onUploadFile}
                    />

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

                    <button type="submit" className="btn-submit">
                      <img src={LIKE_ICON} alt="" className="icon-like" />
                    </button>

                    <button type="submit" className="btn-submit">
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
