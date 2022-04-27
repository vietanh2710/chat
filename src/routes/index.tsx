import React, { FC, memo, Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";

import { Loading } from "components";
import { ROUTES } from "common/constant";
import ProtectedRoutes from "./ProtectedRoutes";

const CommonLayout = lazy(() => import("../components/CommonLayout"));
const Login = lazy(() => import("../components/Login"));
const Register = lazy(() => import("../components/Register"));
const ForgotPassword = lazy(() => import("../components/ForgotPassword"));
const Chat = lazy(() => import("../components/ChannelContainer"));

const AppRoutes: FC = () => {
  const loading = false;
  const user = localStorage.getItem("user");
  const isLogged = user ? JSON.parse(user) : false;

  const element = useRoutes([
    {
      path: ROUTES.HOME,
      element: (
        <ProtectedRoutes condition={!isLogged} redirectTo={ROUTES.SIGNIN}>
          <CommonLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          path: ROUTES.SIGNIN,
          element: <Login />,
        },
        {
          path: ROUTES.REGISTER,
          element: <Register />,
        },
        {
          path: ROUTES.FORGOT_PASSWORD,
          element: <ForgotPassword />,
        },
      ],
    },
    {
      path: ROUTES.HOME,
      element: (
        <ProtectedRoutes condition={isLogged} redirectTo={ROUTES.SIGNIN}>
          <ProtectedRoutes condition={isLogged} redirectTo={ROUTES.CHAT}>
            <Chat />
          </ProtectedRoutes>
        </ProtectedRoutes>
      ),
      children: [
        {
          path: ROUTES.CHAT,
          element: <Chat />,
        },
      ],
    },
  ]);

  if (loading) return <Loading />;

  return <Suspense fallback={<Loading />}>{element}</Suspense>;
};

export default memo(AppRoutes);
