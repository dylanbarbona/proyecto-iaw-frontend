import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, mergeMap, map } from 'rxjs/operators';

import * as userActions from '../actions/user.action';
import * as authActions from '../actions/auth.action';
import { UserService } from 'src/app/services/user.service';

@Injectable()
export class UserEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly userService: UserService) { }

  getUser$ = createEffect(() => this.actions$.pipe(
    ofType(userActions.UserActionTypes.getUser),
    mergeMap(({ search }) => this.userService.get(search).pipe(
      map(user => userActions.GetUserComplete({ user })),
      catchError(async () => userActions.GetUserError())
    )),
  ))

  searchUser$ = createEffect(() => this.actions$.pipe(
    ofType(userActions.UserActionTypes.searchUsers, userActions.UserActionTypes.searchMoreUsers),
    mergeMap(({ search }) => this.userService.search(search).pipe(
      map(users => userActions.SearchUsersComplete({ users })),
      catchError(async () => userActions.SearchUsersError())
    )),
  ))

  updateUser$ = createEffect(() => this.actions$.pipe(
    ofType(userActions.UserActionTypes.updateUser),
    mergeMap(({ input }) => this.userService.update(input).pipe(
      map(user => authActions.UpdateProfile({ user })),
      map(() => userActions.UpdateUserComplete()),
      catchError(async () => userActions.UpdateUserError())
    )),
  ))

  deleteUser$ = createEffect(() => this.actions$.pipe(
    ofType(userActions.UserActionTypes.deleteUser),
    mergeMap(() => this.userService.delete().pipe(
      map(user => authActions.UpdateProfile({ user: undefined })),
      map(() => userActions.DeleteUserComplete()),
      catchError(async () => userActions.DeleteUserError())
    )),
  ))
}
