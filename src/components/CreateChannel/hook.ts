import { Dispatch, SetStateAction, useState } from "react";
import { isEmpty, uniq, includes } from "lodash";

import { ListUsers } from "types";
import data from "./data.json";

export type ReceivedProps = {
  createChannel: boolean;
  setCreateChannel: Dispatch<SetStateAction<boolean>>;
};

const useCreateChannel = (props: ReceivedProps) => {
  const [users, setUsers] = useState<Array<number>>([]);
  const [visible, setVisible] = useState<boolean>(false);

  const addUser = (props: { id: number }) =>
    setUsers(uniq([...users, props?.id]));

  const removeUser = (props: { id: number }) =>
    setUsers(users.filter((item: number) => item !== props?.id));

  const filterUsersActive = data.filter((item: ListUsers) =>
    includes(users, item.id)
  );

  const filterListUsers = isEmpty(filterUsersActive)
    ? data
    : data.filter((item: ListUsers) => !includes(users, item.id));

  return {
    ...props,
    visible,
    filterListUsers,
    filterUsersActive,
    data,
    users,
    setVisible,
    removeUser,
    addUser,
  };
};

export type Props = ReturnType<typeof useCreateChannel>;

export default useCreateChannel;
