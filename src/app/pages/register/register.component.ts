import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { Observable } from 'rxjs';
import {
  selectErrorFeature,
  selectIsLoadingFeature,
  selectIsLoggedInFeature } from '../../store/selectors/auth.selectors';

import { RegisterUser } from '../../store/actions/auth.action';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
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

  ngOnInit(){ }

  submitForm(): void {
    const { email, password, username, name, birthday } = this.registerForm.value
    this.store.dispatch(RegisterUser({ auth: { email, password, username, name, birthday } }))
  }
}
