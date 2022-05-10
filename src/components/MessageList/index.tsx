import { FC, memo } from "react";
import moment from "moment";
import { isEmpty } from "lodash";
import { Col } from "antd";

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
  auth,
  channelId,
  getProfile,
  getUser,
  setHeightWrapper,
  setShowTabInfor,
  setCurrentMessage,
}) => {
  const { imgText, backgroundColor, avt, channelName, members } = getProfile();

  return (
    <>
      {isEmpty(members) ? (
        <Col
          span={18}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Channel Empty
        </Col>
      ) : (
        <MessageListContainer
          span={showTabInfor ? 13 : 18}
          heightWrapper={heightWrapper}
        >
          <div className="header">
            {avt && members.length === 2 ? (
              <img src={avt} alt="" className="header-channel-img" />
            ) : (
              <div>
                <div
                  className="header-img-text"
                  style={{
                    backgroundColor:
                      members.length === 2 ? backgroundColor : "#bee4dd",
                  }}
                >
                  {members.length === 2 ? imgText : "G"}
                </div>
              </div>
            )}

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
              const isUser = auth.uid === i.uid;
              const { avt, imgText, backgroundColor, userName } = getUser(
                i.uid
              );

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
                            index === currentMessage.index &&
                            currentMessage.open
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
      )}
    </>
  );
};

const MessageList: FC<ReceivedProps> = (props) => (
  <MessageListLayout {...useChannelMessage(props)} />
);

export default memo(MessageList);
