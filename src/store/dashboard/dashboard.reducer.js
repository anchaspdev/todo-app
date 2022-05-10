import { DASHBOARD_ACTION_TYPES } from "./dashboard.types";

export const DASHBOARD_INITIAL_STATE = {
  // todos: [],
  // filters: [],
  // users: [],
  dashboardMap: {},
  isLoading: false,
  error: null,
};

export const dashboardReducer = (
  state = DASHBOARD_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case DASHBOARD_ACTION_TYPES.FETCH_DASHBOARD_START:
      return {
        ...state,
        isLoading: true,
      };
    case DASHBOARD_ACTION_TYPES.FETCH_DASHBOARD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dashboardMap: payload,
        // todos: payload.todos,
        // filters: payload.filters,
        // users: payload.users,
      };
    case DASHBOARD_ACTION_TYPES.FETCH_DASHBOARD_FAILED:
      return { ...state, isLoading: false, error: payload };
    case DASHBOARD_ACTION_TYPES.UPDATE_IS_HOME_PAGE:
      return {
        ...state,
        isHomePage: payload,
      };

    default:
      return state;
  }
};
