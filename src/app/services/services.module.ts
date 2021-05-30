import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http'

import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { FollowService } from './follow.service';
import { CategoryService } from './category.service';
import { PostService } from './post.service';
import { CommentService } from './comment.service';
import { LikeService } from './like.service';
import { NotificationService } from './notification.service';
import { CollectionService } from './collection.service';
import { HttpXSRFInterceptorProvider } from '../interceptors/HttpXsrf.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientXsrfModule,
  ],
  providers: [
    AuthService,
    UserService,
    FollowService,
    CategoryService,
    PostService,
    CommentService,
    LikeService,
    NotificationService,
    CollectionService,

    HttpXSRFInterceptorProvider
  ]
})
export class ServicesModule { }
