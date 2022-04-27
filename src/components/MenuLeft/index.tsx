import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGoogleLogout } from "react-google-login";

import { LOGOUT } from "assets";
import { MenuLeftContainer } from "./style";
import { ROUTES } from "common/constant";
import { setLogout } from "../../features/slice/auth";
import { handleActions } from "common/auth";

const MenuLeft: FC = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();

  const onLogout = () => {
    handleActions({ accessToken: "", user: false });
    dispath(setLogout());
    navigate(ROUTES.LOGIN);
  };

  const { signOut, loaded } = useGoogleLogout({
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID || "",
    onLogoutSuccess: onLogout,
  });

  return (
    <MenuLeftContainer>
      <div className="logo">Logo</div>
      <div className="profile"></div>
      <img src={LOGOUT} alt="" className="icon-logout" onClick={signOut} />
    </MenuLeftContainer>
  );
};

export default MenuLeft;
