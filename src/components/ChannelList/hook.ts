import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { last } from "lodash";

import { Auth, Channels, Messages, Users } from "types";

export type ReceivedProps = {
  auth: Auth;
  users: Users[];
  channels: Channels[];
  messages: Messages[];
  channelId: string;
  setChannelId: Dispatch<SetStateAction<string>>;
};

const useChannelList = (props: ReceivedProps) => {
  const [createChannel, setCreateChannel] = useState<boolean>(false);
  const [heightWrapper, setHeightWrapper] = useState<number>();

  const data = props.channels.filter((i) => i.members.includes(props.auth.uid));

  const lastMessage = (id: string) =>
    last(props.messages.filter((i) => i.channelId === id));

  const getProfile = (uid: string[]) => {
    const getUser = props.users.find(
      (o) => uid.includes(o.uid) && o.uid !== props.auth.uid
    );

    const channelName = props.users
      .map((i) => uid.includes(i.uid) && (i.userName || i.email))
      .filter((i) => i);

    return {
      imgText: getUser?.userName.split("")[0] || getUser?.email.split("")[0],
      backgroundColor: getUser?.backgroundColor,
      avt: getUser?.avt,
      userName: getUser?.userName || getUser?.email,
      channelName: channelName.join(", "),
    };
  };

  useEffect(() => {
    const result = document.getElementById("chat-wrapper");

    setHeightWrapper(result?.clientHeight);
  }, [props.channels, props.channelId]);

  return {
    ...props,
    data,
    createChannel,
    heightWrapper,
    lastMessage,
    setCreateChannel,
    getProfile,
  };
};

export type Props = ReturnType<typeof useChannelList>;

export default useChannelList;
