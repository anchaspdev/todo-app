import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsHomePage } from "../../store/dashboard/dashboard.selector";
import NameImageContainer from "../../molecules/nameImageContainer/NameImageContainer";

import {
  NavigationContainer,
  NavLinks,
  BackBtnContainer,
} from "./Navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isHomePage = useSelector(selectIsHomePage);

  return (
    <Fragment>
      <NavigationContainer>
        {!isHomePage ? (
          <BackBtnContainer to="/">
            <div className="h0">Home</div>
          </BackBtnContainer>
        ) : (
          <div></div>
        )}

        <NavLinks>
          {currentUser ? (
            <NameImageContainer
              name={currentUser.name}
              imageUrl={currentUser.imageUrl}
            ></NameImageContainer>
          ) : (
            <div>SignIn</div>
          )}
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
