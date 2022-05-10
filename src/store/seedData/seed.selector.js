import { createSelector } from "reselect";


const selectSeedReducer = (state) => state.seed;

export const selectUsersArray = createSelector(
  [selectSeedReducer],
  (seedSlice) => seedSlice.usersArray
);

export const selectPrioritiesArray = createSelector(
  [selectSeedReducer],
  (seedSlice) => seedSlice.prioritiesArray
);
