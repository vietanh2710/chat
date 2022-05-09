import { FC, memo } from "react";

import { ModalWrapper } from "./style";

interface IProps {
  title?: string | null;
  isModalVisible: boolean;
  children: JSX.Element;
}

const Modal: FC<IProps> = ({
  title = "",
  isModalVisible = false,
  children,
}) => {
  return (
    <ModalWrapper
      width={600}
      visible={isModalVisible}
      title={title}
      closeIcon={true}
      footer={null}
    >
      {children}
    </ModalWrapper>
  );
};

export default memo(Modal);
