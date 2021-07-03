import { createAction, props } from '@ngrx/store';
import { SearchCategoryInput, CreateCategoryInput, UpdateCategoryInput } from '../../interfaces/category.interface';
import { Category } from '../../models/category.model';

export enum CategoryActionTypes {
  getCategory  = '[Category] GET_CATEGORY',
  getCategoryComplete = '[Category] GET_CATEGORY_COMPLETE',
  getCategoryError = '[Category] GET_CATEGORY_ERROR',

  searchCategories  = '[Category] SEARCH_CATEGORIES',
  searchMoreCategories  = '[Category] SEARCH_MORE_CATEGORIES',
  searchCategoriesComplete = '[Category] SEARCH_CATEGORIES_COMPLETE',
  searchCategoriesError = '[Category] SEARCH_CATEGORIES_ERROR',

  createCategory = '[Category] CREATE_CATEGORY',
  createCategoryComplete = '[Category] CREATE_CATEGORY_COMPLETE',
  createCategoryError = '[Category] CREATE_CATEGORY_ERROR',

  updateCategory = '[Category] UPDATE_CATEGORY',
  updateCategoryComplete = '[Category] UPDATE_CATEGORY_COMPLETE',
  updateCategoryError = '[Category] UPDATE_CATEGORY_ERROR',

  deleteCategory = '[Category] DELETE_CATEGORY',
  deleteCategoryComplete = '[Category] DELETE_CATEGORY_COMPLETE',
  deleteCategoryError = '[Category] DELETE_CATEGORY_ERROR',
}

//GET
export const GetCategory = createAction(
  CategoryActionTypes.getCategory,
  props<{ search: SearchCategoryInput }>()
)

export const GetCategoryComplete = createAction(
  CategoryActionTypes.getCategoryComplete,
  props<{ category: Category }>()
)

export const GetCategoryError = createAction(
  CategoryActionTypes.getCategoryError
)

//SEARCH
export const SearchCategories = createAction(
  CategoryActionTypes.searchCategories,
  props<{ search: SearchCategoryInput }>()
)

export const SearchMoreCategories = createAction(
  CategoryActionTypes.searchMoreCategories,
  props<{ search: SearchCategoryInput & { skip: number, limit: number } }>()
)

export const SearchCategoriesComplete = createAction(
  CategoryActionTypes.searchCategoriesComplete,
  props<{ categories: Category[] }>()
)

export const SearchCategoriesError = createAction(
  CategoryActionTypes.searchCategoriesError
)

//CREATE
export const CreateCategory = createAction(
  CategoryActionTypes.createCategory,
  props<{ input: CreateCategoryInput }>()
)

export const CreateCategoryComplete = createAction(
  CategoryActionTypes.createCategoryComplete,
  props<{ category: Category }>()
)

export const CreateCategoryError = createAction(
  CategoryActionTypes.createCategoryError
)

//UPDATE
export const UpdateCategory = createAction(
  CategoryActionTypes.updateCategory,
  props<{ search: SearchCategoryInput, input: UpdateCategoryInput }>()
)

export const UpdateCategoryComplete = createAction(
  CategoryActionTypes.updateCategoryComplete,
  props<{ category: Category }>()
)

export const UpdateCategoryError = createAction(
  CategoryActionTypes.updateCategoryError
)

//DELETE
export const DeleteCategory = createAction(
  CategoryActionTypes.deleteCategory,
  props<{ search: SearchCategoryInput }>()
)

export const DeleteCategoryComplete = createAction(
  CategoryActionTypes.deleteCategoryComplete,
  props<{ category: Category }>()
)

export const DeleteCategoryError = createAction(
  CategoryActionTypes.deleteCategoryError
)
