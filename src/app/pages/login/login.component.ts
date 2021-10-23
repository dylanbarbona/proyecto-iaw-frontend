import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

import { interval, Observable, pipe } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { selectErrorFeature, selectIsLoadingFeature, selectIsLoggedInFeature } from '../../store/selectors/auth.selectors';
import { LoginUser } from '../../store/actions/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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

  ngOnInit(): void {

  }

  submitForm(): void {
    const { email, password } = this.loginForm.value
    this.store.dispatch(LoginUser({ auth: { email, password } }))
  }
}
