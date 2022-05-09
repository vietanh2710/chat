import { FC } from "react";
import { Outlet } from "react-router-dom";

import { CommonLayoutContainer } from "./style";

const CommonLayout: FC = () => {
  return (
    <CommonLayoutContainer>
      <Outlet />
    </CommonLayoutContainer>
  );
};

export default CommonLayout;
