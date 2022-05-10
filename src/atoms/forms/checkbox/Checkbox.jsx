import React from "react";
import { StyledCheckbox, CheckboxRow } from "./Checkbox.styles";

const Checkbox = ({ id, value, onChangeHandler, ...props }) => {
  const handleOnChange = (position) => {
    onChangeHandler(position);
  };

  return (
    <CheckboxRow key={id}>
      <StyledCheckbox
        type="checkbox"
        id={`custom-checkbox-${id}`}
        value
        {...props}
        onChange={() => handleOnChange(id)}
      />
      <label htmlFor={`custom-checkbox-${id}`}>{value}</label>
    </CheckboxRow>
  );
};

export default Checkbox;
