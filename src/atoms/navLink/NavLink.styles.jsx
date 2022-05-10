import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledNavLink = styled(Link)`
  cursor: pointer;
  text-align: right;
  letter-spacing: 0.04em;

  /* Secondary/original */

  color: #de59ff;
`;
