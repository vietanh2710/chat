import React, { FC, useState, memo } from "react";
import { Row, Col } from "antd";

import {
  ChannelInfor,
  ChannelList,
  MessageList,
  CreateChannel,
  MenuLeft,
} from "components";
import { ChannelContainer } from "./styles";

const Channel: FC = () => {
  const [showTabInfor, setShowTabInfor] = useState<boolean>(false);
  const [createChannel, setCreateChannel] = useState<boolean>(false);

  return (
    <Row>
      <Col span={2}>
        <MenuLeft />
      </Col>

      <Col span={22}>
        <ChannelContainer>
          <Row className="channel">
            <ChannelList
              createChannel={createChannel}
              setCreateChannel={setCreateChannel}
            />
            <MessageList
              showTabInfor={showTabInfor}
              setShowTabInfor={setShowTabInfor}
              createChannel={createChannel}
              setCreateChannel={setCreateChannel}
            />
            <CreateChannel
              createChannel={createChannel}
              setCreateChannel={setCreateChannel}
            />
            <ChannelInfor showTabInfor={showTabInfor} />
          </Row>
        </ChannelContainer>
      </Col>
    </Row>
  );
};

export default memo(Channel);
