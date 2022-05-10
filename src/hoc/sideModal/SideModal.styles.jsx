import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1050;
  width: 475px;
  height: 100%;
  outline: 0;
`;

export const ModalContent = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  border-radius: 3px;
  max-width: 500px;
  height: 100%;
  padding: 2rem;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ModalBody = styled.div``;
