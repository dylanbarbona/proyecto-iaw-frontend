import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { AppState } from '../../store/reducers';
import * as postSelector from '../../store/selectors/post.selectors';
import * as postActions from '../../store/actions/post.action';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
    constructor(private readonly store: Store<AppState>){ }

  ngOnInit(): void {
    this.store.dispatch(postActions.GetRandomPosts({ search: { } }))
  }
}
