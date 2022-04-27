import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { ROUTES } from "common/constant";

type InitialValues = {
  email: string;
};

const useForgotPassowrd = () => {
  const navigate = useNavigate();

  const onSubmit = (params: InitialValues) => {
    formik.resetForm();
    navigate(ROUTES.LOGIN);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Field is requied").email("Email in valid"),
    }),
    onSubmit: (values) => onSubmit(values),
  });

  return {
    formik,
  };
};

export type Props = ReturnType<typeof useForgotPassowrd>;

export default useForgotPassowrd;
