import { last } from "lodash";
import React, { Dispatch, SetStateAction, useMemo, useState } from "react";

import { Channels, Messages, User, Users } from "types";

export type ReceivedProps = {
  user: User;
  users: Users[];
  channels: Channels[];
  messages: Messages[];
  channelId: string;
  setChannelId: Dispatch<SetStateAction<string>>;
};

const useChannelList = (props: ReceivedProps) => {
  const [createChannel, setCreateChannel] = useState<boolean>(false);

  const data = props.channels.filter((i) => {
    if (!props.user?.uid) return [];
    return i.members.includes(props.user?.uid);
  });

  const lastMessage = (id: string) => {
    const result = props.messages.filter((i) => i.channelId === id);

    return last(result);
  };

  const getProfile = (uid: string[]) => {
    const getUser = props.users.find(
      (o) => uid.includes(o.uid) && o.uid !== props.user?.uid
    );

    return {
      imgText: getUser?.userName.split("")[0] || getUser?.email.split("")[0],
      backgroundColor: getUser?.backgroundColor,
      avt: getUser?.avt,
      userName: getUser?.userName || getUser?.email,
    };
  };

  return {
    ...props,
    data,
    createChannel,
    lastMessage,
    setCreateChannel,
    getProfile,
  };
};

export type Props = ReturnType<typeof useChannelList>;

export default useChannelList;
