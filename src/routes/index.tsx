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

const NotFoundPage: FC = () => <p>There is nothing here: 404!</p>;

const AppRoutes: FC = () => {
  const user = localStorage.getItem("user");
  const isLogged = user ? JSON.parse(user).user : false;

  const element = useRoutes([
    {
      path: "/",
      element: <NotFoundPage />,
    },
    {
      path: ROUTES.HOME,
      element: (
        <ProtectedRoutes condition={!isLogged} redirectTo={ROUTES.LOGIN}>
          <CommonLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          path: ROUTES.LOGIN,
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
      path: ROUTES.CHAT,
      element: (
        <ProtectedRoutes condition={isLogged} redirectTo={ROUTES.CHAT}>
          <Chat />
        </ProtectedRoutes>
      ),
    },
  ]);

  return <Suspense fallback={<Loading />}>{element}</Suspense>;
};

export default memo(AppRoutes);
