import { Dispatch, SetStateAction, useState } from "react";

export type ReceivedProps = {
  showTabInfor: boolean;
  createChannel: boolean;
  setShowTabInfor: Dispatch<SetStateAction<boolean>>;
  setCreateChannel: Dispatch<SetStateAction<boolean>>;
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

  return {
    ...props,
    currentMessage,
    setCurrentMessage,
  };
};

export type Props = ReturnType<typeof useChannelMessage>;

export default useChannelMessage;
