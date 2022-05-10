import App from "./App";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ReactDOM from "react-dom/client";

it("Render Todo app without crashing", () => {
  const div = document.createElement("div");
  const root = ReactDOM.createRoot(div);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  root.unmount();
});
