import { useState, Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { ImageListType } from "react-images-uploading";
import { useFormik } from "formik";
import * as Yup from "yup";
import { isEmpty } from "lodash";

import { authSelector } from "../../ducks/selector";

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
  const [images, setImages] = useState<ImageListType>([]);
  const [editProfile, setEditProfile] = useState<boolean>(false);

  const { user } = useSelector(authSelector);

  const onChangeImg = (imageList: ImageListType) => setImages(imageList);

  const onSubmit = (response: InitialValues) => {
    if (!isEmpty(formik.errors) || isEmpty(formik.values.email)) return;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      userName: "",
      fullName: "",
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
    onSubmit,
    onOk,
    onCancel,
    onChangeImg,
    setEditProfile,
  };
};

export type Props = ReturnType<typeof useProfile>;

export default useProfile;
