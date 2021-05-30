import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import * as authSelectors from '../../store/selectors/auth.selectors'
import * as authActions from '../../store/actions/auth.action'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private readonly store: Store){ }

  ngOnInit(): void {
  }
}
