import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/reducers';
import {
  selectProfileFeature,
  selectErrorFeature,
  selectIsLoadingFeature,
  selectIsLoggedInFeature } from '../../store/selectors/auth.selectors';

import { Register } from '../../interfaces/register.interface';
import { User } from 'src/app/models/user.model';
import { Observable } from 'rxjs';
import { RegisterUser } from 'src/app/store/actions/auth.action';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
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
    this.register({
      username: 'dylanbarbona',
      password: '27069706636/f',
      birthday: new Date('27/06/1997'),
      email: 'dylanbarbona97@gmail.com',
      name: 'Dylan Barbona'
    })
  }

  private register(auth: Register){
    this.store.dispatch(RegisterUser({ auth }))
  }
}
