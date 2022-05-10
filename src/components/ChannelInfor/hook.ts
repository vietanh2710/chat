import { useMemo } from "react";
import { Auth, Channels, Messages, Users } from "types";

export type ReceivedProps = {
  channelId: string;
  showTabInfor: boolean;
  auth: Auth;
  users: Users[];
  channels: Channels[];
  messages: Messages[];
};

const useChannelInfor = (props: ReceivedProps) => {
  const channelName = useMemo(() => {
    const getChannel = props.channels.find((i) => i.id === props.channelId);
    const getUserId = getChannel?.members.find((i) => i !== props.auth.uid);
    const getUser = props.users.find((i) => i.uid === getUserId);

    if (!getChannel || !getUser) return "";

    return getChannel?.members.length > 2
      ? getChannel?.channelName
      : getUser?.userName || getUser?.email;
  }, [props.channelId, props.channelId]);

  const channelInfor = () => {
    const result = props.channels.find((i) => i.id === props.channelId);
    const getMembers = props.users.filter((i) =>
      result?.members.includes(i.uid)
    );

    return {
      owner: result?.owner,
      members: getMembers,
    };
  };

  return {
    ...props,
    channelName,
    channelInfor,
  };
};

export type Props = ReturnType<typeof useChannelInfor>;

export default useChannelInfor;
