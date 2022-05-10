import { createSelector } from "reselect";
import { sortedTodosListByPriority } from "../../utils/sortTodosList";

const selectDashboard = (state) => state.dashboard;


export const selectDashboardTodoList = createSelector(
  [selectDashboard],
  (dashboardSlice) =>
    dashboardSlice &&
    dashboardSlice.dashboardMap &&
    sortedTodosListByPriority(dashboardSlice.dashboardMap.todos)
);

//TO DO :Array of  Filter wide selectors

export const selectFilteredTodos = createSelector(
  [selectDashboard],
  (dashboardSlice) => {
    const unsortedTodos = dashboardSlice.dashboardMap.todos;
    const filters = dashboardSlice.dashboardMap.filters;
    const filteredTodo = {};
    if (!unsortedTodos) {
      return unsortedTodos;
    }
    const sortedByHighPriority = unsortedTodos.sort(function (todo1, todo2) {
      return todo1.priority.weight - todo2.priority.weight;
    });
    return sortedByHighPriority;
  }
);

export const selectIsHomePage = createSelector(
  [selectDashboard],
  (dashboardSlice) => dashboardSlice.isHomePage
);
