import { createSelector } from '@reduxjs/toolkit';

export const authSelector = createSelector(
  (state: IRootState) => state.auth,
  state => state,
);

export const userSelector = createSelector(
  (state: IRootState) => state.auth,
  state => state.user,
);
