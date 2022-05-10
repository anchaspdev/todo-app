import { SEED_ACTION_TYPES } from "./seed.types";

const INITIAL_STATE = {
  prioritiesArray: [],
  usersArray: [],
  error: null,
};

export const seedReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SEED_ACTION_TYPES.FETCH_USERS:
      return {
        ...state,
        usersArray: payload,
      };
    case SEED_ACTION_TYPES.FETCH_PRIORITIES:
      return { ...state, prioritiesArray: payload };
    case SEED_ACTION_TYPES.FETCH_SEED_ERRORED:
      return { ...state, error: payload };
    default:
      return state;
  }
};
