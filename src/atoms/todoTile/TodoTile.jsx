import React from "react";
import { TileContainer } from "./TodoTile.styles";

const TodoTile = ({ children, ...otherProps }) => {
  return <TileContainer {...otherProps}>{children}</TileContainer>;
};
export default TodoTile;
