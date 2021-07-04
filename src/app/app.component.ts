import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from './store/reducers';
import { Observable } from 'rxjs';
import * as AuthActions from './store/actions/auth.action';
import { selectPostFeature, selectPostsFeature, selectIsLoadingFeature, selectErrorFeature } from './store/selectors/post.selectors';

import { Post } from './models/post.model';
import { CreatePost, GetPost, GetPostsByUser, GetRandomPosts } from './store/actions/post.action';
import { GetLikes, LikePost } from './store/actions/like.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Protopixel'
  post$: Observable<Post>

  constructor(private readonly store: Store<AppState>){
    this.post$ = store.select(selectPostFeature)
  }

  ngOnInit(){
    //this.store.dispatch(GetRandomPosts({ search: { limit: 10, skip: 0 } }))
    //setTimeout(() => this.store.dispatch(GetLikes({ post: '60e0eed29893f73410fb40f6', search: { limit: 10, skip: 0 } })), 2000)
  }
}
