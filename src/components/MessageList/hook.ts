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

  const channelName = useMemo(() => {
    const getChannel = props.channels.find((i) => i.id === props.channelId);
    const getUserId = getChannel?.members.find((i) => i !== props.auth.uid);
    const getUser = props.users.find((i) => i.uid === getUserId);

    if (!getChannel || !getUser) return "";

    return getChannel?.members.length > 2
      ? getChannel?.channelName
      : getUser?.userName || getUser?.email;
  }, [props.channelId, props.channelId]);

  return {
    ...props,
    currentMessage,
    heightWrapper,
    data,
    channelName,
    getUser,
    setHeightWrapper,
    setCurrentMessage,
  };
};

export type Props = ReturnType<typeof useChannelMessage>;

export default useChannelMessage;
