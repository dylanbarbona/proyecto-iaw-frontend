import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, mergeMap, map, tap } from 'rxjs/operators';

import * as categoryActions from '../actions/category.action';
import { CategoryService } from '../../services/category.service';

@Injectable()
export class CategoryEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly categoryService: CategoryService) { }

  searchCategories$ = createEffect(() => this.actions$.pipe(
    ofType(categoryActions.CategoryActionTypes.searchCategories, categoryActions.CategoryActionTypes.searchMoreCategories),
    mergeMap(({ search }) => this.categoryService.search(search).pipe(
      map(categories => categoryActions.SearchCategoriesComplete({ categories })),
      catchError(async () => categoryActions.SearchCategoriesError())
    )),
  ))

  getCategory$ = createEffect(() => this.actions$.pipe(
    ofType(categoryActions.CategoryActionTypes.getCategory),
    mergeMap(({ search }) => this.categoryService.get(search).pipe(
      map(category => categoryActions.GetCategoryComplete({ category })),
      catchError(async () => categoryActions.GetCategoryError())
    )),
  ))
}
