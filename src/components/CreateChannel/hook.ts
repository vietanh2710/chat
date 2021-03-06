import { Dispatch, SetStateAction, useState } from "react";
import { isEmpty, uniq, includes } from "lodash";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";

import userFireStore from "hooks/useFireStore";
import { addRecord } from "services/service";
import { COLLECTION } from "common/constant";

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
  const { users, user } = userFireStore();

  const [allUser, setUsers] = useState<string[]>([]);
  const [visible, setVisible] = useState<boolean>(false);

  const convertUsers = users.filter((i) => i.uid !== user?.uid);

  const onSubmit = (response: InitialValues) => {
    if (isEmpty(response.members)) return;

    addRecord(COLLECTION.CHANNELS, {
      channelName: response.channelName,
      description: response.description,
      members: [...response.members, user?.uid],
      owner: user?.uid,
      createdAt: moment().unix(),
    });
    formik.resetForm();
    props.setCreateChannel(false);
    setUsers([]);
  };

  const formik = useFormik({
    initialValues: {
      channelName: "",
      members: [],
      description: "",
      createdAt: moment().unix(),
    },
    validationSchema: Yup.object().shape({
      members: Yup.array().min(1, "Field is requied"),
    }),
    onSubmit: (values) => onSubmit(values),
  });

  const addUser = (id: string) => {
    formik.setFieldValue("members", uniq([...allUser, id]));
    setUsers(uniq([...allUser, id]));
  };

  const removeUser = (id: string) => {
    setUsers(allUser.filter((i: string) => i !== id));
    formik.setFieldValue(
      "members",
      allUser.filter((i: string) => i !== id)
    );
  };

  const onCancel = () => {
    props.setCreateChannel(false);
    setUsers([]);
    formik.resetForm();
  };

  const filterUsersActive = convertUsers.filter((i) =>
    includes(allUser, i.uid)
  );

  const filterListUsers = isEmpty(filterUsersActive)
    ? convertUsers
    : convertUsers.filter((i) => !includes(allUser, i.uid));

  return {
    ...props,
    formik,
    users,
    visible,
    filterListUsers,
    filterUsersActive,
    onCancel,
    setVisible,
    removeUser,
    addUser,
  };
};

export type Props = ReturnType<typeof useCreateChannel>;

export default useCreateChannel;
