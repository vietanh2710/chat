import { useState } from "react";
import { useFormik } from "formik";
import { get, isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "react-google-login";
import * as Yup from "yup";
import moment from "moment";

import { COLLECTION, ERROR, ROUTES, STATUS } from "common/constant";
import { signin, setAuthLocalStorage, signup } from "common/auth";
import { addRecord } from "services/service";

type InitialValues = {
  email: string;
  password: string;
  remember: boolean;
};

const useLogin = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (response: InitialValues) => {
    if (!isEmpty(response.email)) {
      try {
        await signin(response.email, response.password).then((res) => {
          setAuthLocalStorage();

          navigate(ROUTES.CHAT);
          formik.resetForm();
        });
        setErr("");
      } catch (error) {
        console.log("error :>> ", { error });
        const getErr = get(error, "code");

        if (getErr === ERROR.NOT_FOUND) {
          setErr("User not found");
        }

        if (getErr === ERROR.EMAIL_USE) {
          setErr("Email already in use");
        }

        if (getErr === ERROR.WRONG_PASSWORD) {
          setErr("Wrong password");
        }
      }
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

  const responseGoogle = async (response: any) => {
    if (response?.error === STATUS.CLOSE_POPUP_GOOGLE) {
      localStorage.removeItem("user");
    }

    try {
      setLoading(true);
      await signup(response.profileObj.email, response.googleId).then((res) => {
        if (
          res.additionalUserInfo?.isNewUser &&
          res.user?.uid &&
          res.user?.email
        ) {
          addRecord(COLLECTION.USERS, {
            uid: res.user.uid,
            email: res.user.email,
            avt: response.profileObj.imageUrl,
            fullName: response.profileObj.name,
            userName: response.profileObj.givenName,
            providerId: res?.additionalUserInfo?.providerId,
            backgroundColor:
              "#" + (((1 << 24) * Math.random()) | 0).toString(16),
            createdAt: moment().unix(),
          });
        }
      });

      setAuthLocalStorage();
      navigate(ROUTES.CHAT);
    } catch (error) {
      const getErr = get(error, "code");

      if (getErr === ERROR.EMAIL_USE) {
        setLoading(true);
        await signin(response.profileObj.email, response.googleId).then(
          (res) => {
            setAuthLocalStorage();
            navigate(ROUTES.CHAT);
          }
        );
      }

      setLoading(false);
    }
  };

  const { signIn } = useGoogleLogin({
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
    loading,
    err,
    signIn,
    responseGoogle,
  };
};

export type Props = ReturnType<typeof useLogin>;

export default useLogin;
