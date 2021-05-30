import { Action, createReducer, on } from '@ngrx/store';
import * as categoryActions from '../actions/category.action';
import { Category } from '../../models/category.model';

export const authFeatureKey = 'category';

export interface CategoryState {
  categories: Category[]
  error: boolean,
  isLoading: boolean
}

export const initialState: CategoryState = {
  categories: [],
  error: false,
  isLoading: false
};

export const authReducer = createReducer(
  initialState,
  on(categoryActions.GetCategory, (state) => ({ ...state, isLoading: true })),
  on(categoryActions.GetCategoryComplete, (state, { category }) => ({ ...state, isLoading: false, categories: state.categories.concat(category) })),
  on(categoryActions.GetCategoryError, (state) => ({ ...state, isLoading: false, error: true }))
);
