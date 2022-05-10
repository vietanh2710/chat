import { Dispatch, SetStateAction, useMemo, useState } from "react";

import { Auth, Channels, Messages, Users } from "types";

export type ReceivedProps = {
  showTabInfor: boolean;
  channelId: string;
  auth: Auth;
  users: Users[];
  channels: Channels[];
  messages: Messages[];
  setShowTabInfor: Dispatch<SetStateAction<boolean>>;
};

type CurrentMessage = {
  open: boolean;
  index: number | null;
};

const useChannelMessage = (props: ReceivedProps) => {
  const [currentMessage, setCurrentMessage] = useState<CurrentMessage>({
    open: false,
    index: null,
  });
  const [heightWrapper, setHeightWrapper] = useState<number>();

  const getUser = (uid: string) => {
    const result = props.users.find((item) => item.uid === uid);

    return {
      imgText: result?.userName.split("")[0] || result?.email.split("")[0],
      backgroundColor: result?.backgroundColor,
      avt: result?.avt,
      userName: result?.userName || result?.email,
    };
  };

  const data = props.messages.filter(
    (item) => item.channelId === props.channelId
  );

  const getProfile = () => {
    const getChannel = props.channels.find((i) => i.id === props.channelId);
    const getUserId = getChannel?.members.find((i) => i !== props.auth.uid);
    const getUser = props.users.find((i) => i.uid === getUserId);

    const usersName = props.users
      .map(
        (i) => getChannel?.members.includes(i.uid) && (i.userName || i.email)
      )
      .filter((i) => i);

    return {
      imgText: getUser?.userName.split("")[0] || getUser?.email.split("")[0],
      backgroundColor: getUser?.backgroundColor,
      avt: getUser?.avt,
      channelName:
        getChannel && getChannel?.members.length > 2
          ? getChannel?.channelName || usersName.join(", ")
          : getUser?.userName || getUser?.email,
      members: getChannel?.members || [],
    };
  };

  return {
    ...props,
    currentMessage,
    heightWrapper,
    data,
    getProfile,
    getUser,
    setHeightWrapper,
    setCurrentMessage,
  };
};

export type Props = ReturnType<typeof useChannelMessage>;

export default useChannelMessage;
