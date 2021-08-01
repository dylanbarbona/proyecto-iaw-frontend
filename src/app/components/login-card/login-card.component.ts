import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { interval, Observable, pipe } from 'rxjs';
import {
  selectProfileFeature,
  selectErrorFeature,
  selectIsLoadingFeature,
  selectIsLoggedInFeature } from '../../store/selectors/auth.selectors';

import { User } from 'src/app/models/user.model';
import { Auth } from '../../interfaces/auth.interface';
import { LoginUser } from 'src/app/store/actions/auth.action';
import { concatMap, debounceTime, delay, first, mapTo, switchMap, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss']
})
export class LoginCardComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  error$: Observable<boolean>
  isLoading$: Observable<boolean>
  isLoggedIn$: Observable<boolean>

  constructor(private readonly store: Store<AppState>) {
    this.error$ = store.select(selectErrorFeature)
    this.isLoading$ = store.select(selectIsLoadingFeature)
    this.isLoggedIn$ = store.select(selectIsLoggedInFeature)
  }

  ngOnInit(){
    this.setErrorTime()
  }

  submitForm(): void {
    const { email, password } = this.loginForm.value
    this.store.dispatch(LoginUser({ auth: { email, password } }))
  }

  private setErrorTime(){
    this.error$.pipe(
      switchMap(() => interval(2000).pipe(first())),
      first()
    )
  }
}
