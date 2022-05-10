import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Navigation from "./pages/navigation/Navigation";
import Todos from "./pages/todos/Todos";
import { setCurrentUser } from "./store/user/user.action";
import GlobalStyle from "./theme/global.styles";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //Login and authenticate user or Create user
    const user = {
      id: 1,
      name: "Abram Vetrovs",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    };
    dispatch(setCurrentUser(user));
  }, [dispatch]);

  return (
    <Fragment>
      <div id="modal-root" />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Dashboard />} />
          <Route path="todos/*" element={<Todos />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
