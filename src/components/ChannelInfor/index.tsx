import { FC } from "react";
import { Collapse } from "antd";

import { ChannelInforContainer } from "./style";

const { Panel } = Collapse;

interface IProps {
  showTabInfor: boolean;
}

const ChannelInfor: FC<IProps> = ({ showTabInfor }) => {
  return (
    <>
      {showTabInfor && (
        <ChannelInforContainer span={5}>
          <img
            src="https://img.icons8.com/office/344/conference-call.png"
            alt=""
            className="infor-img"
          />
          <div className="name">Channel</div>

          <Collapse
            defaultActiveKey={["1"]}
            expandIconPosition="right"
            ghost
            className="info-list"
          >
            <Panel header="Chat memebers" key="1" className="pannel-header">
              <div className="members-list">
                <div className="item">
                  <img
                    src="https://img.icons8.com/office/344/user-male-circle.png"
                    alt=""
                    className="user-avt"
                  />
                  <div className="user">
                    <p className="user-name">User Name</p>
                    <p className="position">member</p>
                  </div>
                </div>

                <div className="item">
                  <img
                    src="https://img.icons8.com/office/344/user-female-circle.png"
                    alt=""
                    className="user-avt"
                  />
                  <div className="user">
                    <p className="user-name">User Name</p>
                    <p className="position">member</p>
                  </div>
                </div>
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

export default ChannelInfor;
