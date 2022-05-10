import React from "react";
import ReactDOM from "react-dom";
import {
  ModalOverlay,
  ModalWrapper,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "./SideModal.styles";
const SideModal = ({ isShowing, onClose, children }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <ModalOverlay onClick={onClose} />
          <ModalWrapper>
            <ModalContent>
              <ModalHeader></ModalHeader>
              <ModalBody>{children}</ModalBody>
            </ModalContent>
          </ModalWrapper>
        </React.Fragment>,
        document.body
      )
    : null;

export default SideModal;
