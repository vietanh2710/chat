import React, { FC, useState, memo, useEffect } from "react";
import { Row, Col } from "antd";

import {
  ChannelInfor,
  ChannelList,
  MessageList,
  MenuLeft,
  Loading,
} from "components";
import userFireStore from "hooks/useFireStore";
import { ChannelContainer } from "./styles";
import { get, isEmpty } from "lodash";

const Channel: FC = () => {
  const { user, users, messages, channels } = userFireStore();
  const [showTabInfor, setShowTabInfor] = useState<boolean>(false);
  const [channelId, setChannelId] = useState<string>("");

  const channelList = channels.filter((item) => {
    if (!user?.uid) return;
    return item.members.includes(user?.uid);
  });

  useEffect(() => {
    setChannelId(get(channelList, "[0].id", ""));
  }, [channels]);

  if (!user || isEmpty(channels)) return <Loading />;

  return (
    <Row>
      <Col span={2}>
        <MenuLeft />
      </Col>

      <Col span={22}>
        <ChannelContainer>
          <Row className="channel">
            <ChannelList
              channelId={channelId}
              setChannelId={setChannelId}
              user={user}
              users={users}
              messages={messages}
              channels={channels}
            />

            <MessageList
              channelId={channelId}
              showTabInfor={showTabInfor}
              user={user}
              users={users}
              messages={messages}
              channels={channels}
              setShowTabInfor={setShowTabInfor}
            />

            <ChannelInfor showTabInfor={showTabInfor} />
          </Row>
        </ChannelContainer>
      </Col>
    </Row>
  );
};

export default memo(Channel);
