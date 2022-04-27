import React, { FC, memo } from "react";
import ImageUploading from "react-images-uploading";
import Picker from "emoji-picker-react";
import moment from "moment";

import {
  IMAGE_ICON,
  INFO_ICON,
  PAPER_PLANE_ICON,
  SMILE_ICON,
  XMARK_ICON,
} from "assets";
import { DATE_TIME_FORMAT } from "common/constant";
import useChannelMessage, { Props, ReceivedProps } from "./hook";
import { ChannelMessageContainer } from "./style";
import data from "./data.json";

const ChannelMessageLayout: React.FC<Props> = ({
  createChannel,
  showTabInfor,
  inputHeight,
  currentMessage,
  formik,
  images,
  isEmoji,
  onEmojiClick,
  onChangeImg,
  setShowTabInfor,
  setEmoji,
  setCurrentMessage,
}) => {
  return (
    <>
      {!createChannel && (
        <ChannelMessageContainer
          span={showTabInfor ? 13 : 18}
          heightInput={inputHeight}
        >
          <div className="header" onClick={() => setEmoji(false)}>
            <img
              src="https://img.icons8.com/office/344/conference-call.png"
              alt=""
              className="header-channel-img"
            />
            <div className="text">Channel</div>
            <img
              src={INFO_ICON}
              alt=""
              className="icon-info"
              onClick={() => {
                setShowTabInfor(!showTabInfor);
              }}
            />
          </div>

          <div className="message-list" onClick={() => setEmoji(false)}>
            {data.map((item, index) => {
              const parseTimeStamp = moment.unix(item.lastTime);

              return (
                <div className={`item ${!item.owner && "owner"}`} key={index}>
                  <div className="item-wrapper">
                    <img src={item.avt} alt="" className="user-avt" />
                    <div
                      className="message"
                      onClick={() =>
                        setCurrentMessage({
                          open:
                            index === currentMessage.index &&
                            currentMessage.open
                              ? false
                              : true,
                          index,
                        })
                      }
                    >
                      {item.message}
                    </div>
                  </div>
                  {currentMessage.open && currentMessage.index === index && (
                    <div className="message-time">
                      {item.owner && <span>{item.userName} </span>}
                      {parseTimeStamp.format(DATE_TIME_FORMAT.DATE_TIME)}
                    </div>
                  )}
                </div>
              );
            })}

            {/* <div className="time">
              <span>Today at 7:00pm</span>
            </div> */}
          </div>

          <form onSubmit={formik.handleSubmit} className="chat">
            <div className="chat-wrapper">
              <ImageUploading multiple value={images} onChange={onChangeImg}>
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
        </ChannelMessageContainer>
      )}
    </>
  );
};

const ChannelMessage: FC<ReceivedProps> = (props) => (
  <ChannelMessageLayout {...useChannelMessage(props)} />
);

export default memo(ChannelMessage);
