import React from "react";
import { Button, Modal, Title } from "../../../../components";

export interface EndGameModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export const EndGameModal: React.FC<EndGameModalProps> = ({
  isOpen,
  onClose,
  title,
}) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Title fontSize={24} fontWeight="700" padding="0 0 30px 0">
        {title}
      </Title>

      <Button label="Jogar novamente?" onClick={onClose} />
    </Modal>
  );
};
