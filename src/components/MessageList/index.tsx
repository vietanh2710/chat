import React, { FC, memo } from "react";
import moment from "moment";

import { INFO_ICON } from "assets";
import { DATE_TIME_FORMAT } from "common/constant";
import { MessageInput } from "components";
import useChannelMessage, { Props, ReceivedProps } from "./hook";
import { MessageListContainer } from "./style";
import data from "./data.json";

const MessageListLayout: FC<Props> = ({
  createChannel,
  showTabInfor,
  currentMessage,
  heightWrapper,
  setHeightWrapper,
  setShowTabInfor,
  setCurrentMessage,
}) => {
  return (
    <>
      {!createChannel && (
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

          <div className="message-list">
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

          <MessageInput setHeightWrapper={setHeightWrapper} />
        </MessageListContainer>
      )}
    </>
  );
};

const MessageList: FC<ReceivedProps> = (props) => (
  <MessageListLayout {...useChannelMessage(props)} />
);

export default memo(MessageList);
