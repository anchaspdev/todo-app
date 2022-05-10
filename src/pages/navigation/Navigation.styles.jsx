import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  margin-top: 17px;
  padding-left: 25px;
  padding-right: 25px;
`;

export const Logo = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const BackBtnContainer = styled(Link)`
  height: 100%;
  padding: 8px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
