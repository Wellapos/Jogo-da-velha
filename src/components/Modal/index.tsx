import ReactModal from "react-modal";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: JSX.Element[];
}

ReactModal.setAppElement("#root");

export const Modal = ({ open, onClose, children }: ModalProps) => {
  return (
    <ReactModal
      isOpen={open}
      contentLabel="Modal"
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: "#ffffffb0",
          width: "100vw",
          height: "100vh",
        },
        content: {
          backgroundColor: "white",
          width: "30vw",
          height: "30vh",
          position: "fixed",
          top: "0",
          left: "0",
          transform: "translate(calc(50vw - 50%), calc(50vh - 50%))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          border: "none",
        },
      }}
    >
      {children}
    </ReactModal>
  );
};
