import React, { FC, memo } from "react";
import moment from "moment";

import { INFO_ICON } from "assets";
import { DATE_TIME_FORMAT } from "common/constant";
import { MessageInput } from "components";
import useChannelMessage, { Props, ReceivedProps } from "./hook";
import { MessageListContainer } from "./style";

const MessageListLayout: FC<Props> = ({
  showTabInfor,
  currentMessage,
  heightWrapper,
  data,
  user,
  channelId,
  channelName,
  getUser,
  setHeightWrapper,
  setShowTabInfor,
  setCurrentMessage,
}) => {
  return (
    <>
      <MessageListContainer
        span={showTabInfor ? 13 : 18}
        heightWrapper={heightWrapper}
      >
        <div className="header">
          <img
            src="https://img.icons8.com/office/344/conference-call.png"
            alt=""
            className="header-channel-img"
          />
          <div className="text">{channelName}</div>
          <img
            src={INFO_ICON}
            alt=""
            className="icon-info"
            onClick={() => {
              setShowTabInfor(!showTabInfor);
            }}
          />
        </div>

        <div className="message-list">
          {data.map((i, index: number) => {
            const parseTimeStamp = moment.unix(i.createdAt);
            const isUser = user?.uid === i.uid;
            const { avt, imgText, backgroundColor, userName } = getUser(i.uid);

            return (
              <div className={`item ${isUser && "user"}`} key={index}>
                <div className="item-wrapper">
                  {avt ? (
                    <img src={avt} alt="" className="user-avt" />
                  ) : (
                    <div
                      className="img-text"
                      style={{
                        backgroundColor: backgroundColor,
                      }}
                    >
                      {imgText}
                    </div>
                  )}
                  <div
                    className="message"
                    onClick={() =>
                      setCurrentMessage({
                        open:
                          index === currentMessage.index && currentMessage.open
                            ? false
                            : true,
                        index,
                      })
                    }
                  >
                    {i.content}
                  </div>
                </div>
                {currentMessage.open && currentMessage.index === index && (
                  <div className="message-time">
                    {!isUser && <span>{userName}</span>}{" "}
                    {parseTimeStamp.format(DATE_TIME_FORMAT.DATE_TIME)}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <MessageInput
          setHeightWrapper={setHeightWrapper}
          channelId={channelId}
        />
      </MessageListContainer>
    </>
  );
};

const MessageList: FC<ReceivedProps> = (props) => (
  <MessageListLayout {...useChannelMessage(props)} />
);

export default memo(MessageList);
