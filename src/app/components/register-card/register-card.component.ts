import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { interval, Observable, pipe } from 'rxjs';
import {
  selectErrorFeature,
  selectIsLoadingFeature,
  selectIsLoggedInFeature } from '../../store/selectors/auth.selectors';

import { RegisterUser } from '../../store/actions/auth.action';
import { first, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.scss']
})
export class RegisterCardComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    username: new FormControl(''),
    name: new FormControl(''),
    birthday: new FormControl(''),
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
    const { email, password, username, name, birthday } = this.registerForm.value
    this.store.dispatch(RegisterUser({ auth: { email, password, username, name, birthday } }))
  }

  private setErrorTime(){
    this.error$.pipe(
      switchMap(() => interval(2000).pipe(first())),
      first()
    )
  }
}
