import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import * as authSelectors from '../../store/selectors/auth.selectors'
import * as authActions from '../../store/actions/auth.action'
import { User } from '../../models/user.model';
import { Auth } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(private readonly store: Store){ }

  ngOnInit(): void { }
}
