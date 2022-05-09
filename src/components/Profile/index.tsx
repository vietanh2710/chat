import { FC } from "react";
import ImageUploading from "react-images-uploading";
import { get, isEmpty } from "lodash";

import { Modal } from "components";
import useProfile, { Props, ReceivedProps } from "./hook";
import { ProfileContainer } from "./style";

const ProfileView: FC<Props> = ({
  isModalVisible,
  editProfile,
  images,
  formik,
  auth,
  onOk,
  onChangeImg,
  onCancel,
}) => {
  return (
    <Modal isModalVisible={isModalVisible}>
      <form onSubmit={formik.handleSubmit}>
        <ProfileContainer>
          <div className="avt-img">
            <img
              src={
                get(images, "[0].dataURL") ||
                auth.avt ||
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
              {editProfile && <span>*</span>}
              Email:
              {!editProfile && <div>{auth.email}</div>}
            </label>
            {editProfile && (
              <input
                type="text"
                {...formik.getFieldProps("email")}
                className={`${
                  formik.errors.email &&
                  formik.touched.email &&
                  "error" &&
                  "error"
                }`}
              />
            )}
            {editProfile && formik.errors.email && formik.touched.email && (
              <p className="error-text">{formik.errors.email}</p>
            )}

            <label>
              User Name:
              {!editProfile && <div>{auth.userName}</div>}
            </label>
            {editProfile && (
              <input type="text" {...formik.getFieldProps("userName")} />
            )}

            <label>
              Full Name:
              {!editProfile && <div>{auth.fullName}</div>}
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
        </ProfileContainer>
      </form>
    </Modal>
  );
};

const Profile: FC<ReceivedProps> = (props) => (
  <ProfileView {...useProfile(props)} />
);

export default Profile;
