import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { ROUTES } from "common/constant";

type InitialValues = {
  email: string;
  password: string;
  confirm_password: string;
};

const useRegister = () => {
  const navigate = useNavigate();

  const onSubmit = (params: InitialValues) => {
    formik.resetForm();
    navigate(ROUTES.LOGIN);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Field is requied").email("Email in valid"),
      password: Yup.string().required("Field is requied"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password")], "Password's not match")
        .required("Required"),
    }),
    onSubmit: (values) => onSubmit(values),
  });

  return {
    formik,
  };
};

export type Props = ReturnType<typeof useRegister>;

export default useRegister;
