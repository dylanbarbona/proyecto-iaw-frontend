import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import * as postSelector from '../../store/selectors/post.selectors';
import * as postActions from '../../store/actions/post.action';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]> = this.store.select(postSelector.selectPostsFeature)

  constructor(private readonly store: Store<AppState>){ }

  ngOnInit(): void {
  }

}
