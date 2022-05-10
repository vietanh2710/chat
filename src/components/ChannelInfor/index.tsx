import { FC } from "react";
import { Collapse } from "antd";

import { ChannelInforContainer } from "./style";
import useChannelInfor, { ReceivedProps, Props } from "./hook";

const { Panel } = Collapse;

const ChannelInforView: FC<Props> = ({
  showTabInfor,
  channelName,
  channelInfor,
}) => {
  const { members, owner } = channelInfor();

  return (
    <>
      {showTabInfor && (
        <ChannelInforContainer span={5}>
          {/* <img
            src="https://img.icons8.com/office/344/conference-call.png"
            alt=""
            className="infor-img"
          /> */}
          <div className="name">{channelName}</div>

          <Collapse
            defaultActiveKey={["1"]}
            expandIconPosition="right"
            ghost
            className="info-list"
          >
            <Panel header="Chat memebers" key="1" className="pannel-header">
              <div className="members-list">
                {members.map((i, index) => {
                  return (
                    <div className="item" key={index}>
                      {i.avt ? (
                        <img src={i.avt} alt="" className="user-avt" />
                      ) : (
                        <div
                          className="img-text"
                          style={{
                            backgroundColor: i.backgroundColor,
                          }}
                        >
                          {i.userName.split("")[0] || i.email.split("")[0]}
                        </div>
                      )}
                      <div className="user">
                        <p className="user-name">{i.userName || i.email}</p>
                        <p className="position">
                          {i.uid !== owner && "member"}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Panel>
            <Panel header="Photos" key="2" className="pannel-header"></Panel>
            <Panel
              header="Files and links"
              key="3"
              className="pannel-header"
            ></Panel>
          </Collapse>
          <br />
        </ChannelInforContainer>
      )}
    </>
  );
};

const ChannelInfor: FC<ReceivedProps> = (props) => (
  <ChannelInforView {...useChannelInfor(props)} />
);

export default ChannelInfor;
