import { Dispatch, SetStateAction, useState } from "react";
import { isEmpty, uniq, includes } from "lodash";
import { useFormik } from "formik";
import * as Yup from "yup";

import userFireStore from "hooks/useFireStore";
import { addRecord } from "services/addRecord";

export type ReceivedProps = {
  createChannel: boolean;
  setCreateChannel: Dispatch<SetStateAction<boolean>>;
};

type InitialValues = {
  channelName: string;
  members: string[];
  description: string;
  createdAt: number;
};

const useCreateChannel = (props: ReceivedProps) => {
  const { users: allUser } = userFireStore();

  const [users, setUsers] = useState<string[]>([]);
  const [visible, setVisible] = useState<boolean>(false);

  const onSubmit = (response: InitialValues) => {
    addRecord("channels", {
      channelName: response.channelName,
      description: response.description,
      members: users,
      createdAt: Date.now(),
    });
    formik.resetForm();
    setUsers([]);
  };

  const formik = useFormik({
    initialValues: {
      channelName: "",
      members: [],
      description: "",
      createdAt: Date.now(),
    },
    // validationSchema: Yup.object().shape({}),
    onSubmit: (values) => onSubmit(values),
  });

  const addUser = (id: string) => setUsers(uniq([...users, id]));

  const removeUser = (id: string) =>
    setUsers(users.filter((i: string) => i !== id));

  const filterUsersActive = allUser.filter((i) => includes(users, i.uid));

  const filterListUsers = isEmpty(filterUsersActive)
    ? allUser
    : allUser.filter((i) => !includes(users, i.uid));

  return {
    ...props,
    formik,
    users,
    visible,
    filterListUsers,
    filterUsersActive,
    setVisible,
    removeUser,
    addUser,
  };
};

export type Props = ReturnType<typeof useCreateChannel>;

export default useCreateChannel;
