import React, { FC } from "react";

import { Modal } from "components";
import useProfile, { Props, ReceivedProps } from "./hook";

const ProfileView: FC<Props> = ({
  isModalVisible,
  editProfile,
  user,
  setEditProfile,
  setIsModalVisible,
  onSubmit,
}) => {
  return (
    <Modal
      isModalVisible={isModalVisible}
      showBtnOK={editProfile}
      handleOk={onSubmit}
      handleCancel={() => setIsModalVisible(false)}
      okText={"Submit"}
    >
      <div className="profile">
        <div className="avt-img">
          <img
            src={
              user?.avt ||
              "https://img.icons8.com/office/344/conference-call.png"
            }
            alt=""
          />
        </div>

        <div className="content">
          <label>
            Email:
            {!editProfile && <div>{user?.email}</div>}
          </label>
          {editProfile && <input type="text" />}

          <label>
            User Name:
            {!editProfile && <div>{user?.userName}</div>}
          </label>
          {editProfile && <input type="text" />}

          <label>
            Full Name:
            {!editProfile && <div>{user?.fullName}</div>}
          </label>
          {editProfile && <input type="text" />}

          <label>
            Password: <div>*******</div>
          </label>

          <button
            type="submit"
            className="btn-edit"
            onClick={() => {
              setEditProfile(!editProfile);
            }}
          >
            {editProfile ? "Cancel" : "Edit Profile"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

const Profile: FC<ReceivedProps> = (props) => (
  <ProfileView {...useProfile(props)} />
);

export default Profile;
