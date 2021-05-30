import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import * as authSelectors from '../store/selectors/auth.selectors'
import * as authActions from '../store/actions/auth.action'
import { AppState } from '../store/reducers';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  isLoggedIn$ = this.store.pipe(select(authSelectors.selectIsLoggedInFeature))

  constructor(
    private readonly store: Store<AppState>,
    private readonly router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.store.dispatch(authActions.CheckAuth())
    return this.isLoggedIn$.pipe(
      map(isLoggedIn => {
        if(!isLoggedIn)
          this.router.navigateByUrl('login');
        return isLoggedIn
      }),
    )
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    this.store.dispatch(authActions.CheckAuth())
    return this.isLoggedIn$.pipe(
      map(isLoggedIn => {
        if(!isLoggedIn)
          this.router.navigateByUrl('login');
        return isLoggedIn
      }),
    )
  }
}
