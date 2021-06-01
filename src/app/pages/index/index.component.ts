import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import * as authSelectors from '../../store/selectors/auth.selectors'
import * as authActions from '../../store/actions/auth.action'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  content = [
    {
      image: 'https://picsum.photos/id/237/1366/768'
    },{
      image: 'https://picsum.photos/id/156/1366/768'
    },{
      image: 'https://picsum.photos/id/567/1366/768'
    }
  ]
  
  constructor(private readonly store: Store){ }

  ngOnInit(): void { }

}
