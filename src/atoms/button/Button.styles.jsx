import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 15px;
  width: auto;
  height: 31px;
  border-radius: 8px;
  padding: 8px;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border: 0px;
`;

export const SubmitButton = styled(BaseButton)`
  background: #9e00ff;
  box-shadow: 0px 2px 0px rgba(103, 0, 167, 0.78);
  border-radius: 8px;
  color: #ffffff;
`;

export const AddButton = styled(BaseButton)`
  background: #9e00ff;
  box-shadow: 0px 2px 0px rgba(103, 0, 167, 0.78);
  border-radius: 8px;
  color: #ffffff;
`;

export const CancelButton = styled(BaseButton)`
  background: #eeeeee;
  box-shadow: 0px 2px 0px #dedede;
  color: #111111;
  &:hover {
  }
`;
