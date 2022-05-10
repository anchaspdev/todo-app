import { TODOS_ACTION_TYPES } from "./todos.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import todosServices from "../../dataServices/todos.services";

//Set Refetch Todo Lists data  success
export const refreshTodosList = () => {
  return createAction(TODOS_ACTION_TYPES.REFRESH_TODOS);
};

//Requesting for fetch  Todo Lists data
export const fetchTodosListStart = () =>
  createAction(TODOS_ACTION_TYPES.FETCH_TODOS_START);

//Handling fetch  Todo Lists data  success
export const fetchTodosListSuccess = (todosArray) => {
  return createAction(TODOS_ACTION_TYPES.FETCH_TODOS_SUCCESS, todosArray);
};

//Handling fetch  Todo Lists data failure response
export const fetchTodosListFailure = (error) =>
  createAction(TODOS_ACTION_TYPES.FETCH_TODOS_FAILED, error);

//Triggering rest api call to fetch  Todo Lists data
export const fetchTodosListStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchTodosListStart());
    try {
      const todosListResponse = await todosServices.getAllTodosData();
      dispatch(fetchTodosListSuccess(todosListResponse.data));
    } catch (error) {
      dispatch(fetchTodosListFailure(error));
    }
  };
};
