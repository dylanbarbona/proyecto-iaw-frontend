import { Component, Input, OnInit} from '@angular/core';
import { EmptyUser, User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as authSelectors from '../../store/selectors/auth.selectors'
import { AppState } from '../../store/reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  enable_sidebar = true
  @Input()
  background = 'bg-transparent'
  isLoggedIn$: Observable<boolean> = this.store.select(authSelectors.selectIsLoggedInFeature)
  profile$: Observable<User> = this.store.select(authSelectors.selectProfileFeature)

  constructor(private readonly store: Store<AppState>){}

  ngOnInit(): void { }
}
