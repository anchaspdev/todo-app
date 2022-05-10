import { DASHBOARD_ACTION_TYPES } from "./dashboard.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import dashboardServices from "../../dataServices/dashboard.services";

//Requesting for fetch dashboard data
export const fetchDashboardStart = () =>
  createAction(DASHBOARD_ACTION_TYPES.FETCH_DASHBOARD_START);

//Handling fetch dashboard data  success
export const fetchDashboardSuccess = (dashboardMap) => {
  return createAction(
    DASHBOARD_ACTION_TYPES.FETCH_DASHBOARD_SUCCESS,
    dashboardMap
  );
};

//Handling fetch dashboard data failure response
export const fetchdashboardFailure = (error) =>
  createAction(DASHBOARD_ACTION_TYPES.FETCH_dashboard_FAILED, error);

//Triggering rest api call to fetch dashboard data
export const fetchDashboardStartAsync = () => {
  return async (dispatch) => {
    dispatch(updateIsHomePage(true));
    dispatch(fetchDashboardStart());
    try {
      const dashboardResponse = await dashboardServices.getAllDashboardData();
      dispatch(fetchDashboardSuccess(dashboardResponse.data));
    } catch (error) {
      dispatch(fetchdashboardFailure(error));
    }
  };
};

export const updateIsHomePage = (isHomePage) => {
  return createAction(DASHBOARD_ACTION_TYPES.UPDATE_IS_HOME_PAGE, isHomePage);
};
