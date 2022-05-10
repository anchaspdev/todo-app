import renderer from "react-test-renderer";
import Dashboard from "./Dashboard";
import { Provider } from "react-redux";
import { store } from "../../store/store";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
