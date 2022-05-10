import { combineReducers } from "redux";
import { dashboardReducer } from "./dashboard/dashboard.reducer";
import { userReducer } from "./user/user.reducer";
import { todosReducer } from "./todos/todos.reducer";
import { seedReducer } from "./seedData/seed.reducer";

export const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  user: userReducer,
  todos: todosReducer,
  seed: seedReducer,
});
