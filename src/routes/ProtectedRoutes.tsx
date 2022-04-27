import React, { FC, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

type IProps = {
  condition: boolean;
  redirectTo: string;
  children: ReactNode;
};

const ProtectedRoutes: FC<IProps> = ({ condition, redirectTo, children }) => {
  const location = useLocation();

  return condition ? (
    <>{children}</>
  ) : (
    <Navigate to={redirectTo} state={{ from: location }} replace />
  );
};

export default ProtectedRoutes;
