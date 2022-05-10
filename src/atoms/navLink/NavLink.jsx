import React from "react";
import { StyledNavLink } from "./NavLink.styles";
const NavLink = ({ children, to, ...otherProps }) => {
  return (
    <StyledNavLink to={to} {...otherProps}>
      {children}
    </StyledNavLink>
  );
};

export default NavLink;
