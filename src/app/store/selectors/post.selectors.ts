import { createFeatureSelector, createSelector } from "@ngrx/store";
import { postFeatureKey, PostState } from "../reducers/post.reducer";
import { AppState } from "../reducers";

export const selectPostState = createFeatureSelector<AppState, PostState>(postFeatureKey);

export const selectPostFeature = createSelector(
  selectPostState,
  (state: PostState) => state.post
)

export const selectPostsFeature = createSelector(
  selectPostState,
  (state: PostState) => state.posts
)

export const selectIsLoadingFeature = createSelector(
  selectPostState,
  (state: PostState) => state.isLoading
)

export const selectErrorFeature = createSelector(
  selectPostState,
  (state: PostState) => state.error
)
