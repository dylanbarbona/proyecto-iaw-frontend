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
  images: string[] = []
  constructor(private readonly store: Store<AppState>){ }

  ngOnInit(): void {
    this.store.dispatch(postActions.GetRandomPosts({ search: { } }))
    for(let i=0; i<25; i++)
      this.images.push(`https://picsum.photos/id/${Math.floor(Math.random()*100)}/280/${(Math.floor(Math.random()*200)%250)+200}`)
  }

}
