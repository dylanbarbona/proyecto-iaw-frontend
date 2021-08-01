import { Component, HostListener, Input, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as authSelectors from '../../store/selectors/auth.selectors'
import * as authActions from '../../store/actions/auth.action'
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  background = 'bg-transparent'

  isLoggedIn$: Observable<boolean> = this.store.select(authSelectors.selectIsLoggedInFeature)

  constructor(private readonly store: Store<AppState>){ }

  ngOnInit(): void {
    this.store.dispatch(authActions.CheckAuth())
  }
}
