import React from "react";
import { NormalText } from "./Text.styles";

const Text = ({ children, ...otherProps }) => {
  return <NormalText {...otherProps}>{children}</NormalText>;
};

export default Text;
