import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as postActions from '../../store/actions/post.action';
import * as postSelects from '../../store/selectors/post.selectors';
import { AppState } from '../../store/reducers';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.scss']
})
export class ShowPostComponent implements OnInit {
  id!: string;
  post$!: Observable<Post>;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || ''
    this.post$ = this.store.select(postSelects.selectSinglePostFeature)
    this.store.dispatch(postActions.GetPost({ _id: this.id }))
  }
}
