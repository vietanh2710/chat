import React, { Dispatch, FC, SetStateAction, memo } from "react";
import moment from "moment";

import { EDIT_ICON, SEARCH_ICON } from "assets";
import { DATE_TIME_FORMAT } from "common/constant";
import { ChannelListContainer } from "./style";
import data from "./data.json";

interface IProps {
  createChannel: boolean;
  setCreateChannel: Dispatch<SetStateAction<boolean>>;
}

const ChannelList: FC<IProps> = ({ setCreateChannel }) => {
  return (
    <ChannelListContainer span={6}>
      <div className="header">
        <p className="text">Chat</p>
        <div
          className="icon-edit-wrapper"
          onClick={() => setCreateChannel(true)}
        >
          <img src={EDIT_ICON} alt="" className="icon-edit" />
        </div>
        <div className="search-wrapper">
          <img src={SEARCH_ICON} alt="" className="icon-search" />
          <input type="text" placeholder="Search" className="search" />
        </div>
      </div>

      <div className="channel-list">
        {data.map((item, index) => {
          return (
            <div
              className="item"
              key={index}
              onClick={() => setCreateChannel(false)}
            >
              <div className="item-wrapper">
                <img src={item.channelImg} alt="" className="channel-image" />
                <div className="preview">
                  <div className="channel-name">{item.channelName}</div>
                  <div className="last-message">{item.lastMessage}</div>
                </div>
              </div>

              <div className="last-time">
                {moment.unix(item.lastTime).format(DATE_TIME_FORMAT.TIME)}
              </div>
            </div>
          );
        })}
      </div>
    </ChannelListContainer>
  );
};

export default memo(ChannelList);
