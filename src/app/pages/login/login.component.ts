import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import {
  selectProfileFeature,
  selectErrorFeature,
  selectIsLoadingFeature,
  selectIsLoggedInFeature } from '../../store/selectors/auth.selectors';

import { Auth } from '../../interfaces/auth.interface';
import { User } from 'src/app/models/user.model';
import { Observable } from 'rxjs';
import { LoginUser } from 'src/app/store/actions/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private profile$: Observable<User>
  private error$: Observable<boolean>
  private isLoading$: Observable<boolean>
  private isLoggedIn$: Observable<boolean>

  constructor(private readonly store: Store<AppState>){
    this.profile$ = store.select(selectProfileFeature)
    this.error$ = store.select(selectErrorFeature)
    this.isLoading$ = store.select(selectIsLoadingFeature)
    this.isLoggedIn$ = store.select(selectIsLoggedInFeature)
  }

  ngOnInit(): void {
    //this.login({ username: 'dylanbarbona', password: '27069706636/f' })
  }

  private login(auth: Auth){
    this.store.dispatch(LoginUser({ auth }))
  }
}
