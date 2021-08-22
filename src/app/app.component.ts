import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from './store/reducers';
import * as AuthActions from './store/actions/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Protopixel'
  constructor(private readonly store: Store<AppState>){ }

  ngOnInit(){
    this.store.dispatch(AuthActions.CheckAuth());
  }
}
