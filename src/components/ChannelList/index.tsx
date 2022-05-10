import { FC, memo } from "react";
import moment from "moment";

import { EDIT_ICON, SEARCH_ICON } from "assets";
import { DATE_TIME_FORMAT } from "common/constant";
import { CreateChannel } from "components";
import { ChannelListContainer } from "./style";
import useChannelList, { Props, ReceivedProps } from "./hook";

const ChannelListView: FC<Props> = ({
  setChannelId,
  getProfile,
  setCreateChannel,
  lastMessage,
  createChannel,
  data,
}) => {
  return (
    <ChannelListContainer span={6}>
      <div className="header">
        <p className="text">Chat</p>
        <div className="icon-edit-wrapper">
          <img
            src={EDIT_ICON}
            alt=""
            className="icon-edit"
            onClick={() => setCreateChannel(true)}
          />
          <CreateChannel
            createChannel={createChannel}
            setCreateChannel={setCreateChannel}
          />
        </div>
        <div className="search-wrapper">
          <img src={SEARCH_ICON} alt="" className="icon-search" />
          <input type="text" placeholder="Search" className="search" />
        </div>
      </div>

      <div className="channel-list">
        {data.map((i, index) => {
          const { imgText, backgroundColor, avt, userName } = getProfile(
            i.members
          );

          console.log("avt :>> ", avt);

          return (
            <div
              className="item"
              key={index}
              onClick={() => {
                setChannelId(i.id);
              }}
            >
              <div className="item-wrapper">
                {avt && i.members.length === 2 ? (
                  <img src={avt} alt="" className="channel-image" />
                ) : (
                  <div
                    className="img-text"
                    style={{
                      backgroundColor:
                        i.members.length === 2 ? backgroundColor : "#bee4dd",
                    }}
                  >
                    {i.members.length === 2 ? imgText : "G"}
                  </div>
                )}

                <div className="preview">
                  <div>
                    <div className="channel-name">
                      {i.members.length > 2 ? i.channelName : userName}
                    </div>
                    <div className="active"></div>
                  </div>
                  <div className="last-message">
                    {lastMessage(i.id)?.content}
                  </div>
                </div>
              </div>

              <div className="last-time">
                {moment
                  .unix(lastMessage(i.id)?.createdAt || i.createdAt)
                  .format(DATE_TIME_FORMAT.TIME)}
              </div>
            </div>
          );
        })}
      </div>
    </ChannelListContainer>
  );
};

const ChannelList: FC<ReceivedProps> = (props) => (
  <ChannelListView {...useChannelList(props)} />
);

export default memo(ChannelList);
