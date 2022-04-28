import React, { FC, memo, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

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

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={
            <ProtectedRoutes condition={isLogged} redirectTo={ROUTES.LOGIN}>
              <ProtectedRoutes condition={!isLogged} redirectTo={ROUTES.CHAT}>
                <Login />
              </ProtectedRoutes>
            </ProtectedRoutes>
          }
        />

        <Route
          path={ROUTES.CHAT}
          element={
            <ProtectedRoutes condition={isLogged} redirectTo={ROUTES.LOGIN}>
              <Chat />
            </ProtectedRoutes>
          }
        />

        <Route
          path={ROUTES.LOGIN}
          element={
            <ProtectedRoutes condition={!isLogged} redirectTo={ROUTES.CHAT}>
              <Chat />
            </ProtectedRoutes>
          }
        />

        <Route path={ROUTES.LOGIN} element={<CommonLayout />}>
          <Route path={ROUTES.LOGIN} element={<Login />} />
        </Route>

        <Route path={ROUTES.REGISTER} element={<CommonLayout />}>
          <Route path={ROUTES.REGISTER} element={<Register />} />
        </Route>

        <Route path={ROUTES.FORGOT_PASSWORD} element={<CommonLayout />}>
          <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
        </Route>

        <Route path="*" element={<p>There&apos;s nothing here: 404!</p>} />
      </Routes>
    </Suspense>
  );
};

export default memo(AppRoutes);
