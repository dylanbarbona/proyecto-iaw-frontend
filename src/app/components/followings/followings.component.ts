import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../store/reducers';
import { selectIsLoggedInFeature } from '../../store/selectors/auth.selectors';

@Component({
  selector: 'app-followings',
  templateUrl: './followings.component.html',
  styleUrls: ['./followings.component.scss']
})
export class FollowingsComponent implements OnInit {
  isLoggedIn$: Observable<boolean> = this.store.select(selectIsLoggedInFeature)

  constructor(private readonly store: Store<AppState>){ }

  ngOnInit(): void {
  }

}
