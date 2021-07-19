import { createFeatureSelector, createSelector } from "@ngrx/store";
import { collectionFeatureKey, CollectionState } from "../reducers/collection.reducer";
import { AppState } from "../reducers";

export const selectCollectionState = createFeatureSelector<AppState, CollectionState>(collectionFeatureKey);

export const selectCollectionFeature = createSelector(
  selectCollectionState,
  (state: CollectionState) => state.collection
)

export const selectCollectionsFeature = createSelector(
  selectCollectionState,
  (state: CollectionState) => state.collections
)

export const selectIsLoadingFeature = createSelector(
  selectCollectionState,
  (state: CollectionState) => state.isLoading
)

export const selectErrorFeature = createSelector(
  selectCollectionState,
  (state: CollectionState) => state.error
)
