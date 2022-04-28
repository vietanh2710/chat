import React, { FC, memo } from "react";

import { ModalWrapper } from "./style";

interface IProps {
  title?: string | null;
  isModalVisible: boolean;
  children: JSX.Element;
  showBtnOK?: boolean;
  okText?: string | undefined;
  handleOk: () => void;
  handleCancel: () => void;
}

const Modal: FC<IProps> = ({
  title = "",
  isModalVisible = false,
  children,
  showBtnOK = true,
  okText = "ok",
  handleOk,
  handleCancel,
}) => {
  return (
    <ModalWrapper
      width={600}
      visible={isModalVisible}
      title={title}
      closeIcon={true}
      footer={[
        <button key="cancel" onClick={handleCancel}>
          Cancel
        </button>,
        ...[
          showBtnOK && (
            <button key="ok" onClick={handleOk}>
              {okText}
            </button>
          ),
        ],
      ]}
    >
      {children}
    </ModalWrapper>
  );
};

export default memo(Modal);
