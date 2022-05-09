import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { ROUTES } from "common/constant";
import { signup } from "common/auth";
import { addRecord } from "services/service";

type InitialValues = {
  email: string;
  password: string;
  confirm_password: string;
};

const useRegister = () => {
  const navigate = useNavigate();

  const onSubmit = async (params: InitialValues) => {
    try {
      await signup(params.email, params.password).then((res) => {
        if (
          res.additionalUserInfo?.isNewUser &&
          res.user?.uid &&
          res.user?.email
        ) {
          addRecord("users", {
            uid: res.user.uid,
            email: res.user.email,
            avt: "",
            fullName: "",
            userName: "",
            providerId: res?.additionalUserInfo?.providerId,
            backgroundColor:
              "#" + (((1 << 24) * Math.random()) | 0).toString(16),
            createdAt: Date.now(),
          });
        }
      });
      formik.resetForm();
      navigate(ROUTES.LOGIN);
    } catch (error) {
      console.log("error :>> ", { error });
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Field is requied").email("Email in valid"),
      password: Yup.string()
        .required("Field is requied")
        .min(5, "Your password must be longer than 5 characters")
        .max(25)
        .matches(/^(?=.{6,})/, "Must Contain 6 Characters"),
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
