import { Injectable, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import * as authSelectors from '../store/selectors/auth.selectors'
import { AppState } from '../store/reducers';
import { EmptyUser } from '../models/user.model';
import * as AuthActions from '../store/actions/auth.action';

@Injectable({
  providedIn: 'root'
})
export class GuessGuard implements CanActivate, CanLoad {
  constructor(
    private readonly store: Store<AppState>,
    private readonly router: Router) {
      this.store.dispatch(AuthActions.CheckAuth());
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      return this.store.pipe(select(authSelectors.selectProfileFeature)).pipe(
        map(profile => {
          if(profile != EmptyUser.getInstance()){
            this.router.navigateByUrl('/');
            return false
          }
          return true
        }),

        catchError(async (error) => {
          this.router.navigateByUrl('/')
          return false
        })
      )
    }

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
      return this.store.pipe(select(authSelectors.selectProfileFeature)).pipe(
        map(profile => {
          if(profile != EmptyUser.getInstance()){
            this.router.navigateByUrl('/');
            return false
          }
          return true
        }),
        catchError(async (error) => {
          this.router.navigateByUrl('/')
          return false
        })
      )
    }
}
