import React, { FC } from "react";
import ImageUploading from "react-images-uploading";
import { get, isEmpty } from "lodash";

import { Modal } from "components";
import useProfile, { Props, ReceivedProps } from "./hook";

const ProfileView: FC<Props> = ({
  isModalVisible,
  editProfile,
  user,
  images,
  formik,
  onOk,
  onChangeImg,
  onCancel,
}) => {
  return (
    <Modal isModalVisible={isModalVisible}>
      <form onSubmit={formik.handleSubmit}>
        <div className="profile">
          <div className="avt-img">
            <img
              src={
                get(images, "[0].dataURL") ||
                user?.avt ||
                "https://img.icons8.com/office/344/conference-call.png"
              }
              alt=""
            />

            <ImageUploading
              multiple={false}
              value={images}
              onChange={onChangeImg}
            >
              {({ onImageUpload, onImageRemove }) => {
                return <div className=""></div>;
              }}
            </ImageUploading>
          </div>

          <div className="content">
            <label>
              Email:
              {!editProfile && <div>{user?.email}</div>}
            </label>
            {editProfile && (
              <input type="text" {...formik.getFieldProps("email")} />
            )}

            <label>
              User Name:
              {!editProfile && <div>{user?.userName}</div>}
            </label>
            {editProfile && (
              <input type="text" {...formik.getFieldProps("userName")} />
            )}

            <label>
              Full Name:
              {!editProfile && <div>{user?.fullName}</div>}
            </label>
            {editProfile && (
              <input type="text" {...formik.getFieldProps("fullName")} />
            )}

            <label>Password: {!editProfile && <div>*******</div>}</label>
            {editProfile && (
              <input type="password" {...formik.getFieldProps("password")} />
            )}
          </div>

          <div className="btn-wrapper">
            <button onClick={onCancel} className="btn-cancel">
              {editProfile ? "Back" : "Cancel"}
            </button>

            {!editProfile ? (
              <button onClick={onOk} className="btn-submit">
                Edit Profile
              </button>
            ) : (
              <button
                type="submit"
                disabled={
                  !isEmpty(formik.errors) || isEmpty(formik.values.email)
                }
                className={`btn-submit ${
                  !isEmpty(formik.errors) || isEmpty(formik.values.email)
                    ? "disable"
                    : ""
                }`}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </form>
    </Modal>
  );
};

const Profile: FC<ReceivedProps> = (props) => (
  <ProfileView {...useProfile(props)} />
);

export default Profile;
