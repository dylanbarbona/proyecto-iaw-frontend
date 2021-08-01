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

  constructor(){ }

  ngOnInit(): void { }
}
