import { Dispatch, SetStateAction, useState } from "react";
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

  const data = props.channels.filter((i) => i.members.includes(props.auth.uid));

  const lastMessage = (id: string) =>
    last(props.messages.filter((i) => i.channelId === id));

  const getProfile = (uid: string[]) => {
    const getUser = props.users.find(
      (o) => uid.includes(o.uid) && o.uid !== props.auth.uid
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
