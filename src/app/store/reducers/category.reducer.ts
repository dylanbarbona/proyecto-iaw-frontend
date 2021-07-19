import { createReducer, on } from '@ngrx/store';
import * as categoryActions from '../actions/category.action';
import { Category, EmptyCategory } from '../../models/category.model';

export const categoryFeatureKey = 'category';

export interface CategoryState {
  categories: Category[],
  category: Category,
  error: boolean,
  isLoading: boolean
}

export const initialState: CategoryState = {
  categories: [],
  category: new EmptyCategory(),
  error: false,
  isLoading: false
};

export const categoryReducer = createReducer(
  initialState,
  on(categoryActions.GetCategory, (state) => ({ ...state, isLoading: true, category: new EmptyCategory() })),
  on(categoryActions.GetCategoryComplete, (state, { category }) => ({ ...state, isLoading: false, category })),
  on(categoryActions.GetCategoryError, (state) => ({ ...state, isLoading: false, error: true })),

  on(categoryActions.SearchCategories, (state) => ({ ...state, isLoading: true, categories: [] })),
  on(categoryActions.SearchMoreCategories, (state) => ({ ...state, isLoading: true })),
  on(categoryActions.SearchCategoriesComplete, (state, { categories }) => ({ ...state, isLoading: false, categories: state.categories.concat(categories) })),
  on(categoryActions.SearchCategoriesError, (state) => ({ ...state, isLoading: false, error: true })),
);
