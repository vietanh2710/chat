import { useState, Dispatch, SetStateAction } from "react";
import { ImageListType } from "react-images-uploading";
import { useFormik } from "formik";
import * as Yup from "yup";
import { isEmpty, omit } from "lodash";

import userFireStore from "hooks/useFireStore";
import { getProfile } from "common/auth";

export type ReceivedProps = {
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  isModalVisible: boolean;
};

type InitialValues = {
  email: string;
  userName: string;
  fullName: string;
  password: string;
};

const useProfile = (props: ReceivedProps) => {
  const { user } = userFireStore();
  const [images, setImages] = useState<ImageListType>([]);
  const [editProfile, setEditProfile] = useState<boolean>(false);

  const onChangeImg = (imageList: ImageListType) => setImages(imageList);

  const onSubmit = (response: InitialValues) => {
    if (!isEmpty(formik.errors) || isEmpty(formik.values.email)) return;

    console.log("response :>> ", omit(response, "password"));
  };

  const getUser = getProfile(user?.uid || "");

  const formik = useFormik({
    initialValues: {
      email: getUser?.email || "",
      password: "",
      userName: getUser?.userName || "",
      fullName: getUser?.fullName || "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Email in valid"),
    }),
    onSubmit: (values) => onSubmit(values),
  });

  const onOk = () => setEditProfile(true);

  const onCancel = () => {
    formik.resetForm();
    if (editProfile) {
      setEditProfile(false);
      return;
    }
    props.setIsModalVisible(false);
  };

  return {
    ...props,
    editProfile,
    user,
    images,
    formik,
    getUser,
    onSubmit,
    onOk,
    onCancel,
    onChangeImg,
    setEditProfile,
  };
};

export type Props = ReturnType<typeof useProfile>;

export default useProfile;
