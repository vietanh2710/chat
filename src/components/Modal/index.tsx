import React, { FC } from "react";

import { ModalWrapper } from "./style";

interface IProps {
  title?: string | null;
  isModalVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  children: JSX.Element;
  showBtnOK?: boolean;
}

const Modal: FC<IProps> = ({
  title = "",
  isModalVisible = false,
  handleOk,
  handleCancel,
  children,
  showBtnOK = true,
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
              OK
            </button>
          ),
        ],
      ]}
    >
      {children}
    </ModalWrapper>
  );
};

export default Modal;
