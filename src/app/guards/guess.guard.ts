import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import * as authSelectors from '../store/selectors/auth.selectors'
import * as authActions from '../store/actions/auth.action'
import { AppState } from '../store/reducers';

@Injectable({
  providedIn: 'root'
})
export class GuessGuard implements CanActivate, CanLoad {
  profile$ = this.store.pipe(select(authSelectors.selectProfileFeature))

  constructor(
    private readonly store: Store<AppState>,
    private readonly router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.store.dispatch(authActions.CheckAuth())
    return this.profile$.pipe(
      tap(console.log),
      map(profile => {
        console.log(profile)
        return true
        /*
        if(!profile)
          this.router.navigateByUrl('login');
        return profile
        */
      }),
    )
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    this.store.dispatch(authActions.CheckAuth())
    return this.profile$.pipe(
      tap(console.log),
      map(profile => {
        console.log(profile)
        return true
        /*
        if(!profile)
          this.router.navigateByUrl('login');
        return profile
        */
      }),
    )
  }
}
