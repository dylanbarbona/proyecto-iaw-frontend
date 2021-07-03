import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { AppState } from '../../store/reducers';
import * as authSelectors from '../../store/selectors/auth.selectors'
import * as authActions from '../../store/actions/auth.action'
import { Auth } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {  
  constructor(private readonly store: Store<AppState>){ }

  ngOnInit(): void { 
    this.login({ username: 'dylanbarbona', password: '27069706636/f' })
  }

  login(auth: Auth){
    this.store.dispatch(authActions.LoginUser({ auth }))
  }
}
