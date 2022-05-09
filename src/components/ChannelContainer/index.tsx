import { FC, useState, memo, useEffect } from "react";
import { Row, Col } from "antd";
import { get } from "lodash";

import {
  ChannelInfor,
  ChannelList,
  MessageList,
  MenuLeft,
  Loading,
} from "components";
import userFireStore from "hooks/useFireStore";
import { ChannelContainer } from "./styles";

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

  const auth = users.find((item) => item.uid === user?.uid);

  if (!auth || !users) return <Loading />;

  const fireStore = {
    auth: auth,
    users: users,
    messages: messages,
    channels: channels,
  };

  return (
    <Row>
      <Col span={2}>
        <MenuLeft auth={auth} users={users} />
      </Col>

      <Col span={22}>
        <ChannelContainer>
          <Row className="channel">
            <ChannelList
              channelId={channelId}
              setChannelId={setChannelId}
              {...fireStore}
            />

            <MessageList
              channelId={channelId}
              showTabInfor={showTabInfor}
              {...fireStore}
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
