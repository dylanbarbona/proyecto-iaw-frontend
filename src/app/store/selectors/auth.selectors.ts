import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState, authFeatureKey } from '../reducers/auth.reducer';
import { AppState } from '../reducers';

export const selectAuthState = createFeatureSelector<AppState, AuthState>(authFeatureKey);

export const selectAuthFeature = createSelector(
  selectAuthState,
  (state: AuthState) => state
);

export const selectProfileFeature = createSelector(
  selectAuthFeature,
  (state: AuthState) => state.profile
)

export const selectErrorFeature = createSelector(
  selectAuthFeature,
  (state: AuthState) => state.error
)

export const selectIsLoggedInFeature = createSelector(
  selectAuthFeature,
  (state: AuthState) => state.isLoggedIn
)

export const selectIsLoadingFeature = createSelector(
  selectAuthFeature,
  (state: AuthState) => state.isLoading
)
