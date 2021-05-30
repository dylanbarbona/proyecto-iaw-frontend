import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../reducers';
import { userFeatureKey, UserState } from '../reducers/user.reducer';

export const selectUserState = createFeatureSelector<AppState, UserState>(userFeatureKey);

export const selectUserFeature = createSelector(
  selectUserState,
  (state: UserState) => state
);

export const selectUsersFeature = createSelector(
  selectUserFeature,
  (state: UserState) => state.users
)

export const selectErrorFeature = createSelector(
  selectUserFeature,
  (state: UserState) => state.error
)

export const selectIsLoadingFeature = createSelector(
  selectUserFeature,
  (state: UserState) => state.isLoading
)
