import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, mergeMap, map, tap } from 'rxjs/operators';

import * as userActions from '../actions/user.action';
import * as authActions from '../actions/auth.action';
import { UserService } from 'src/app/services/user.service';
import { EmptyUser } from 'src/app/models/user.model';

import { AppState } from '../reducers';
import { Store } from '@ngrx/store';

@Injectable()
export class UserEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly userService: UserService,
    private readonly store: Store<AppState>) { }

  getUser$ = createEffect(() => this.actions$.pipe(
    ofType(userActions.UserActionTypes.getUser),
    mergeMap(({ username }) => this.userService.get(username).pipe(
      map(user => {
        if(user == null)
          throw new Error()
        return userActions.GetUserComplete({ user })
      }),
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
      tap(user => this.store.dispatch(authActions.UpdateProfile({ user }))),
      map(() => userActions.UpdateUserComplete()),
      catchError(async () => userActions.UpdateUserError())
    )),
  ))

  deleteUser$ = createEffect(() => this.actions$.pipe(
    ofType(userActions.UserActionTypes.deleteUser),
    mergeMap(() => this.userService.delete().pipe(
      tap(user => this.store.dispatch(authActions.UpdateProfile({ user: new EmptyUser() }))),
      map(() => userActions.DeleteUserComplete()),
      catchError(async () => userActions.DeleteUserError())
    )),
  ))
}
