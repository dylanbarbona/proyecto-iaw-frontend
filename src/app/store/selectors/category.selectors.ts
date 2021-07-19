import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../reducers";
import { categoryFeatureKey, CategoryState } from "../reducers/category.reducer";

export const selectCategoryState = createFeatureSelector<AppState, CategoryState>(categoryFeatureKey);

export const selectCategoryFeature = createSelector(
  selectCategoryState,
  (state: CategoryState) => state.category
)

export const selectCategoriesFeature = createSelector(
  selectCategoryState,
  (state: CategoryState) => state.categories
)

export const selectIsLoadingFeature = createSelector(
  selectCategoryState,
  (state: CategoryState) => state.isLoading
)

export const selectErrorFeature = createSelector(
  selectCategoryState,
  (state: CategoryState) => state.error
)
