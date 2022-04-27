import { useFormik } from "formik";
import { isEmpty } from "lodash";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "common/constant";

type InitialValues = {
  email: string;
  password: string;
  remember: boolean;
};

const useLogin = () => {
  const navigate = useNavigate();

  const onSubmit = (params: InitialValues) => {
    if (!isEmpty(params.email)) {
      localStorage.setItem("user", JSON.stringify(true));
      navigate(ROUTES.CHAT);
      formik.resetForm();
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Field is requied").email("Email in valid"),
      password: Yup.string().required("Field is requied"),
    }),
    onSubmit: (values) => onSubmit(values),
  });

  return {
    formik,
  };
};

export type Props = ReturnType<typeof useLogin>;

export default useLogin;
