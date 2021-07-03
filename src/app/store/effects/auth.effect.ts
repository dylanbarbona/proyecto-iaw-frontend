import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { tap, catchError, mergeMap, map, delay } from 'rxjs/operators';

import * as authActions from '../actions/auth.action';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly authService: AuthService,
    private readonly router: Router) { }

  loginUser$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.AuthActionTypes.loginUser),
    mergeMap(({ auth }) => this.authService.login(auth).pipe(
      map(({ user }) => authActions.LoginUserComplete({ profile: user })),
      tap(() => this.router.navigate(['/home'])),
      catchError(async () => authActions.LoginUserError())
    )),
  ))

  registerUser$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.AuthActionTypes.registerUser),
    mergeMap(({ auth }) => this.authService.register(auth).pipe(
      map(({ user }) => authActions.RegisterUserComplete({ profile: user })),
      tap(() => this.router.navigate(['/home'])),
      catchError(async () => authActions.RegisterUserError())
    )
    ),
  ))

  checkAuth$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.AuthActionTypes.checkAuth),
    mergeMap(() => {
      return this.authService.check().pipe(
        map(({ ok }) => {
          if(!ok)
            return authActions.CheckAuthError()
          return authActions.CheckAuthComplete()
        }),
          catchError(async () => authActions.CheckAuthError())
        )
    })
  ))

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.AuthActionTypes.logoutUser),
    mergeMap(() => this.authService.logout().pipe(
      map(({ ok }) => {
        if (!ok)
          throw new Error()
        return authActions.LogoutUserComplete()
      }),
      tap(() => this.router.navigate(['/'])),
      catchError(async () => authActions.LogoutUserError())
    ))
  ))

  error$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.AuthActionTypes.loginUserError),
    delay(2000),
    map(() => authActions.InitialAction())
  ))
}
