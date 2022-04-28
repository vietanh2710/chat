import React, { FC, memo } from "react";
import { isEmpty } from "lodash";
import { Popover } from "antd";

import useCreateChannel, { Props, ReceivedProps } from "./hook";
import { PAPER_PLANE_ICON, SMILE_ICON, XMARK_ICON } from "assets";
import { CreateChannelContainer } from "./style";

const CreateChannelLayout: FC<Props> = ({
  createChannel,
  data,
  users,
  visible,
  filterUsersActive,
  filterListUsers,
  addUser,
  removeUser,
  setVisible,
  setCreateChannel,
}) => {
  return (
    <>
      {createChannel && (
        <CreateChannelContainer span={18} data={data.length}>
          <div className="header" onClick={() => setVisible(!visible)}>
            <div className="search">To: </div>
            <div className="users-active">
              {users.length > 0 &&
                filterUsersActive.map((item, index) => (
                  <div className="item" key={index}>
                    <img src={item.avt} alt="" width={20} height={20} />
                    <div>{item.userName}</div>
                    <img
                      src={XMARK_ICON}
                      alt=""
                      className="icon-xmark"
                      onClick={() => {
                        if (users.length === 1) {
                          setCreateChannel(false);
                        }
                        setVisible(false);
                        removeUser(item);
                      }}
                    />
                  </div>
                ))}
            </div>

            {!isEmpty(filterListUsers) && (
              <Popover
                content={
                  <div className="list-users">
                    {filterListUsers.map((item, index) => (
                      <div
                        className="item"
                        key={index}
                        onClick={() => addUser(item)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          padding: "4px 0 10px 0",
                          cursor: "pointer",
                        }}
                      >
                        <img src={item.avt} alt="" width={25} height={25} />
                        <div
                          className="user-name"
                          style={{
                            fontSize: 15,
                            paddingLeft: 14,
                          }}
                        >
                          {item.userName}
                        </div>
                      </div>
                    ))}
                  </div>
                }
                trigger="click"
                placement="bottom"
                visible={visible}
              />
            )}
          </div>

          <div className="message-list" onClick={() => setVisible(false)}></div>

          <div className="chat" onClick={() => setVisible(false)}>
            <div className="chat-left">
              <img src={SMILE_ICON} alt="" className="icon-smile" />
              <input
                type="text"
                placeholder="Send a message"
                className="send"
              />
            </div>
            <img src={PAPER_PLANE_ICON} alt="" className="icon-send" />
          </div>
        </CreateChannelContainer>
      )}
    </>
  );
};

const CreateChannel: FC<ReceivedProps> = (props) => (
  <CreateChannelLayout {...useCreateChannel(props)} />
);

export default memo(CreateChannel);
