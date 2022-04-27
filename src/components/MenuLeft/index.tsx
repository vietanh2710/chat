import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import { LOGOUT } from "assets";
import { MenuLeftContainer } from "./style";
import { ROUTES } from "common/constant";

const MenuLeft: FC = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.setItem("user", JSON.stringify(false));
    navigate(ROUTES.SIGNIN);
  };

  return (
    <MenuLeftContainer>
      <div className="logo">Logo</div>
      <div className="profile"></div>
      <img src={LOGOUT} alt="" className="icon-logout" onClick={onLogout} />
    </MenuLeftContainer>
  );
};

export default MenuLeft;
