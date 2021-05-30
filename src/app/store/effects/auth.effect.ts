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
      map(({ access_token }) => {
        this.authService.saveToken(access_token)
        return this.authService.decodeToken(access_token)
      }),
      delay(2000),
      map((profile) => authActions.LoginUserComplete({ profile })),
      tap(() => this.router.navigate(['/home'])),
      catchError(async () => authActions.LoginUserError())
    )
    ),
  ))

  registerUser$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.AuthActionTypes.registerUser),
    mergeMap(({ auth }) => this.authService.register(auth).pipe(
      map(({ access_token }) => {
        this.authService.saveToken(access_token)
        return this.authService.decodeToken(access_token)
      }),
      delay(2000),
      map((profile) => authActions.RegisterUserComplete({ profile })),
      tap(() => this.router.navigate(['/home'])),
      catchError(async () => authActions.RegisterUserError())
    )
    ),
  ))

  checkAuth$ = createEffect(() => this.actions$.pipe(
    ofType(authActions.AuthActionTypes.checkAuth),
    mergeMap(() => {
      return this.authService.check().pipe(
        map(({ access_token, error }) => {
          if(error)
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
        if (ok)
          return authActions.LogoutUserComplete()
        else
          throw new Error()
      }),
      tap(() => {
        sessionStorage.removeItem('access_token')
        sessionStorage.removeItem('XSRF-TOKEN')
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
