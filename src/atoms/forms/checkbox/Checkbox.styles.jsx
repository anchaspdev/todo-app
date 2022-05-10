import styled from "styled-components";
import {
  primaryDarkColor,
  grayDarkColor,
  whiteColor,
} from "../../../theme/variables.styles";

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  width: 12px;
  height: 12px;
  margin-right: 16px;
  vertical-align: center;

  &:after {
    content: "";
    display: block;
    opacity: 1;
    width: 8px;
    height: 8px;
    background-color: ${whiteColor};
    box-shadow: 0 0 1px 0px ${grayDarkColor};
    border-radius: 1px;
    border: 2px solid ${whiteColor};
  }

  &:checked:after {
    background-color: ${primaryDarkColor};
  }
`;

export const CheckboxRow = styled.div`
  display: flex;
  flex-direction: row;
`;
