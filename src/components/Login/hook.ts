import { useFormik } from "formik";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGoogleLogin } from "react-google-login";
import sha256 from "sha256";
import * as Yup from "yup";

import { ROUTES, STATUS } from "common/constant";
import { setLogin } from "../../ducks/slice/auth";
import { handleActions } from "common/auth";

type InitialValues = {
  email: string;
  password: string;
  remember: boolean;
};

const useLogin = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();

  const onSubmit = (response: InitialValues) => {
    if (!isEmpty(response.email)) {
      handleActions({ accessToken: sha256(response.password), user: true });

      dispath(
        setLogin({
          email: response.email,
        })
      );

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

  const responseGoogle = (response: any) => {
    if (response?.error === STATUS.CLOSE_POPUP_GOOGLE) {
      handleActions({ accessToken: "", user: false });
    }
    handleActions({ accessToken: response.accessToken, user: true });
    dispath(
      setLogin({
        email: response.profileObj.email,
        userName: response.profileObj.givenName,
        fullName: response.profileObj.name,
        avt: response.profileObj.imageUrl,
      })
    );
    navigate(ROUTES.CHAT);
  };

  const { signIn, loaded } = useGoogleLogin({
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID || "",
    onSuccess: responseGoogle,
    onFailure: responseGoogle,
    cookiePolicy: "single_host_origin",
    isSignedIn: false,
    prompt: "consent",
    fetchBasicProfile: true,
  });

  return {
    formik,
    loaded,
    signIn,
    responseGoogle,
  };
};

export type Props = ReturnType<typeof useLogin>;

export default useLogin;
