import { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

import { authSelector } from "../../ducks/selector";

export type ReceivedProps = {
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  isModalVisible: boolean;
};

const useProfile = (props: ReceivedProps) => {
  const { user } = useSelector(authSelector);

  const [editProfile, setEditProfile] = useState<boolean>(false);

  const onSubmit = () => {
    props.setIsModalVisible(false);
  };

  return {
    ...props,
    editProfile,
    user,
    setEditProfile,
    onSubmit,
  };
};

export type Props = ReturnType<typeof useProfile>;

export default useProfile;
