import { TODOS_ACTION_TYPES } from "./todos.types";

export const TODOS_LIST_INITIAL_STATE = {
  todosArray: [],
  isLoading: false,
  isHomePage: false,
  isReloading: false,
  error: null,
};

export const todosReducer = (state = TODOS_LIST_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case TODOS_ACTION_TYPES.FETCH_TODOS_START:
      return {
        ...state,
        isLoading: true,
      };
    case TODOS_ACTION_TYPES.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isReloading: false,
        todosArray: payload,
      };
    case TODOS_ACTION_TYPES.FETCH_TODOS_FAILED:
      return { ...state, isLoading: false, error: payload };
    case TODOS_ACTION_TYPES.RELOAD_TODOS:
      return { ...state, isReloading: true };
    default:
      return state;
  }
};
