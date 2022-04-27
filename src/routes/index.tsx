import React, { FC, memo, Suspense, lazy } from "react";
import { useRoutes, Navigate, Outlet, Routes } from "react-router-dom";

import { Loading } from "components";
import { ROUTES } from "common/constant";
import ProtectedRoutes from "./ProtectedRoutes";

const CommonLayout = lazy(() => import("../components/CommonLayout"));
const Login = lazy(() => import("../components/Login"));
const Register = lazy(() => import("../components/Register"));
const ForgotPassword = lazy(() => import("../components/ForgotPassword"));
const Chat = lazy(() => import("../components/ChannelContainer"));

const AppRoutes: FC = () => {
  const user = localStorage.getItem("user");
  const isLogged = user ? JSON.parse(user).user : false;

  const element = useRoutes([
    {
      path: ROUTES.HOME,
      element: (
        <ProtectedRoutes condition={isLogged} redirectTo={ROUTES.LOGIN}>
          <CommonLayout />
        </ProtectedRoutes>
      ),
    },
    {
      path: ROUTES.HOME,
      element: (
        <ProtectedRoutes condition={!isLogged} redirectTo={ROUTES.HOME}>
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
      path: ROUTES.HOME,
      element: (
        <ProtectedRoutes condition={isLogged} redirectTo={ROUTES.LOGIN}>
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
    {
      path: "*",
      element: <Navigate to={ROUTES.HOME} state={{ from: location }} replace />,
    },
  ]);

  return <Suspense fallback={<Loading />}>{element}</Suspense>;
};

export default memo(AppRoutes);
