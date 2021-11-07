import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { AppState } from '../../store/reducers';
import * as postSelector from '../../store/selectors/post.selectors';
import * as postActions from '../../store/actions/post.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Observable<Post[]> = this.store.select(postSelector.selectPostsFeature)

  constructor(private readonly store: Store<AppState>){ }

  ngOnInit(): void {
    this.store.dispatch(postActions.GetRandomPosts({ search: { } }))
  }

}
