import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogout } from "react-google-login";
import { useDispatch } from "react-redux";

import { LOGOUT_ICON, PERSON_ICON } from "assets";
import { ROUTES } from "common/constant";
import { Profile } from "components";
import { resetAuth } from "../../ducks/slice/auth";
import { MenuLeftContainer } from "./style";

const MenuLeft: FC = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const onLogout = () => {
    localStorage.removeItem("user");
    dispath(resetAuth());
    navigate(ROUTES.LOGIN);
  };

  const { signOut, loaded } = useGoogleLogout({
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID || "",
    onLogoutSuccess: onLogout,
  });

  return (
    <MenuLeftContainer>
      <div className="logo">Logo</div>
      <img
        src={PERSON_ICON}
        alt=""
        className="icon-profile"
        onClick={() => setIsModalVisible(true)}
      />
      <img src={LOGOUT_ICON} alt="" className="icon-logout" onClick={signOut} />

      <Profile
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </MenuLeftContainer>
  );
};

export default MenuLeft;
