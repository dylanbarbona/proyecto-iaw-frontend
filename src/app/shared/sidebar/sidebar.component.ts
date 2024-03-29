import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../store/reducers';
import { selectIsLoggedInFeature } from '../../store/selectors/auth.selectors';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isLoggedIn$: Observable<boolean> = this.store.select(selectIsLoggedInFeature)

  constructor(private readonly store: Store<AppState>){ }

  ngOnInit(): void {
  }

}
