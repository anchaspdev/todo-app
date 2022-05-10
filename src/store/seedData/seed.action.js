import { SEED_ACTION_TYPES } from "./seed.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import seedServices from "../../dataServices/seed.services";

export const fetchSeedListsFailure = (error) =>
  createAction(SEED_ACTION_TYPES.FETCH_SEED_FAILED, error);

export const fetchPrioritiesListAsync = () => {
  return async (dispatch) => {
    try {
      const prioritiesResponse = await seedServices.getPrioritiesData();
      console.log(prioritiesResponse);
      dispatch(
        createAction(
          SEED_ACTION_TYPES.FETCH_PRIORITIES,
          prioritiesResponse.data
        )
      );
    } catch (error) {
      dispatch(fetchSeedListsFailure(error));
    }
  };
};

export const fetchUsersListAsync = () => {
  return async (dispatch) => {
    try {
      const usersResponse = await seedServices.getUsersData();
      console.log(usersResponse);
      dispatch(createAction(SEED_ACTION_TYPES.FETCH_USERS, usersResponse.data));
    } catch (error) {
      dispatch(fetchSeedListsFailure(error));
    }
  };
};
