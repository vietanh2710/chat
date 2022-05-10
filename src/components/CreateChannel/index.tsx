import { FC, memo } from "react";
import { isEmpty } from "lodash";
import { Popover } from "antd";

import { XMARK_ICON } from "assets";
import { Modal } from "components";
import useCreateChannel, { Props, ReceivedProps } from "./hook";
import { CreateChannelContainer } from "./style";

const CreateChannelLayout: FC<Props> = ({
  formik,
  createChannel,
  users,
  visible,
  filterUsersActive,
  filterListUsers,
  onCancel,
  addUser,
  removeUser,
  setVisible,
  setCreateChannel,
}) => {
  return (
    <Modal isModalVisible={createChannel}>
      <CreateChannelContainer>
        <form onSubmit={formik.handleSubmit}>
          <div className="create-channel">
            <label>Channel Name: </label>
            <input
              type="text"
              onClick={() => setVisible(false)}
              {...formik.getFieldProps("channelName")}
            />

            <label>Discription: </label>
            <input
              type="text"
              onClick={() => setVisible(false)}
              {...formik.getFieldProps("description")}
            />

            <label className="search" onClick={() => setVisible(!visible)}>
              <span>*</span> To:{" "}
            </label>
            <div className="users-active" onClick={() => setVisible(!visible)}>
              {users.length > 0 &&
                filterUsersActive.map((i, index: number) => (
                  <div className="item" key={index}>
                    {i.avt ? (
                      <img
                        src={i.avt}
                        alt=""
                        width={28}
                        height={28}
                        style={{
                          borderRadius: 50,
                          marginRight: 10,
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          backgroundColor: i.backgroundColor,
                          textTransform: "uppercase",
                          borderRadius: 50,
                          width: 28,
                          height: 28,
                          fontWeight: 600,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          marginRight: 10,
                        }}
                      >
                        {i.userName.split("")[0] || i.email.split("")[0]}
                      </div>
                    )}
                    <div>{i.userName || i.email}</div>
                    <img
                      src={XMARK_ICON}
                      alt=""
                      className="icon-xmark"
                      onClick={() => {
                        setVisible(false);
                        removeUser(i.uid);
                      }}
                    />
                  </div>
                ))}
            </div>

            {!isEmpty(filterListUsers) && (
              <Popover
                content={
                  <div className="list-users">
                    {filterListUsers.map((i, index: number) => (
                      <div
                        className="item"
                        key={index}
                        onClick={() => {
                          addUser(i.uid);
                          setVisible(false);
                        }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          padding: "4px 0 10px 0",
                          cursor: "pointer",
                        }}
                      >
                        {i.avt ? (
                          <img
                            src={i.avt}
                            alt=""
                            style={{
                              borderRadius: 50,
                            }}
                            width={32}
                            height={32}
                          />
                        ) : (
                          <div
                            style={{
                              backgroundColor: i.backgroundColor,
                              textTransform: "uppercase",
                              borderRadius: 50,
                              width: 32,
                              height: 32,
                              fontWeight: 500,
                              fontSize: 18,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#fff",
                            }}
                          >
                            {i.userName.split("")[0] || i.email.split("")[0]}
                          </div>
                        )}
                        <div
                          className="user-name"
                          style={{
                            fontSize: 15,
                            paddingLeft: 14,
                          }}
                        >
                          {i.userName || i.email}
                        </div>
                      </div>
                    ))}
                  </div>
                }
                trigger="click"
                placement="bottom"
                visible={visible}
              />
            )}
          </div>

          <div className="btn-wrapper" onClick={() => setVisible(false)}>
            <div className="btn-cancel" onClick={onCancel}>
              Cancel
            </div>

            <button
              type="submit"
              disabled={
                !isEmpty(formik.errors) || isEmpty(formik.values.members)
              }
              className={`btn-submit ${
                !isEmpty(formik.errors) || isEmpty(formik.values.members)
                  ? "disable"
                  : ""
              }`}
            >
              Submit
            </button>
          </div>
        </form>
      </CreateChannelContainer>
    </Modal>
  );
};

const CreateChannel: FC<ReceivedProps> = (props) => (
  <CreateChannelLayout {...useCreateChannel(props)} />
);

export default memo(CreateChannel);
