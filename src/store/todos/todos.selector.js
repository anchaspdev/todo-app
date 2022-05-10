import { createSelector } from "reselect";
import { sortedTodosListByPriority } from "../../utils/sortTodosList";

const selectTodosReducer = (state) => state.todos;

export const selectTodos = createSelector(
  [selectTodosReducer],
  (todosSlice) => todosSlice.todosArray
);

export const selectSortedTodoList = createSelector(
  [selectTodosReducer],
  (todosSlice) => {
    console.log(todosSlice);
    return todosSlice && sortedTodosListByPriority(todosSlice.todosArray);
  }
);

export const selectIsLoading = createSelector(
  [selectTodosReducer],
  (todosSlice) => todosSlice.isLoading
);

export const selectIsHomePage = createSelector(
  [selectTodosReducer],
  (todosSlice) => todosSlice.isHomePage
);

export const selectIsReloading = createSelector(
  [selectTodosReducer],
  (todosSlice) => todosSlice.isReloading
);
