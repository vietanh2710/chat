import { useState, Dispatch, SetStateAction } from "react";
import { ImageListType } from "react-images-uploading";
import { useFormik } from "formik";
import * as Yup from "yup";
import { isEmpty, omit } from "lodash";

import { Auth, Users } from "types";
import { getProfile } from "common/auth";

export type ReceivedProps = {
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  isModalVisible: boolean;
  auth: Auth;
  users: Users[];
};

type InitialValues = {
  email: string;
  userName: string;
  fullName: string;
  password: string;
};

const useProfile = (props: ReceivedProps) => {
  const [images, setImages] = useState<ImageListType>([]);
  const [editProfile, setEditProfile] = useState<boolean>(false);

  const onChangeImg = (imageList: ImageListType) => setImages(imageList);

  const onSubmit = (response: InitialValues) => {
    if (!isEmpty(formik.errors) || isEmpty(formik.values.email)) return;

    console.log("response :>> ", omit(response, "password"));
  };

  const formik = useFormik({
    initialValues: {
      email: props.auth.email || "",
      password: "",
      userName: props.auth.userName || "",
      fullName: props.auth.fullName || "",
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
    images,
    formik,
    onSubmit,
    onOk,
    onCancel,
    onChangeImg,
    setEditProfile,
  };
};

export type Props = ReturnType<typeof useProfile>;

export default useProfile;
