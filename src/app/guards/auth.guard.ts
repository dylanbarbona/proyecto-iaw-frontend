import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { catchError, distinctUntilChanged, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import * as authSelectors from '../store/selectors/auth.selectors'
import { AppState } from '../store/reducers';
import { EmptyUser } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  profile$ = this.store.pipe(select(authSelectors.selectProfileFeature)).pipe(
    map(profile => {
      if(profile != EmptyUser.getInstance()){
        this.router.navigateByUrl('home');
        return false
      }
      return true
    }),
  )

  constructor(
    private readonly store: Store<AppState>,
    private readonly router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.profile$
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.profile$
  }
}
