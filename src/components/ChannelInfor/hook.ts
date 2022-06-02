import { useCallback, useMemo } from "react";
import { flatten, isEmpty } from "lodash";

import { isValidHttpUrl } from "common/url";
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

  const channelInfor = useCallback(() => {
    const getChannel = props.channels.find((i) => i.id === props.channelId);
    const getMembers = props.users.filter((i) =>
      getChannel?.members.includes(i.uid)
    );

    const filterMessage = props.messages.filter(
      (i) => i.channelId === props.channelId
    );
    const getImages = filterMessage.map((i) => i.images);
    const getFiles = filterMessage.filter((i) => i?.file?.name);
    const getLinks = filterMessage.filter((i) => isValidHttpUrl(i.content));

    return {
      owner: getChannel?.owner,
      members: getMembers,
      images: isEmpty(getImages) ? [] : flatten(getImages),
      files: getFiles,
      links: getLinks,
    };
  }, [props]);

  return {
    ...props,
    channelName,
    channelInfor,
  };
};

export type Props = ReturnType<typeof useChannelInfor>;

export default useChannelInfor;
