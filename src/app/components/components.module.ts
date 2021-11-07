import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MdbModule } from 'mdb-angular-ui-kit';
import { NgxMasonryModule } from 'ngx-masonry';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ErrorComponent } from './error/error.component';
import { SearchComponent } from './search/search.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { ProfileTimelineComponent } from './profile-timeline/profile-timeline.component';
import { ProfileFollowersComponent } from './profile-followers/profile-followers.component';
import { ProfilePhotosComponent } from './profile-photos/profile-photos.component';
import { ProfileVideosComponent } from './profile-videos/profile-videos.component';
import { UserProfileHeaderComponent } from './user-profile-header/user-profile-header.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { FollowingsComponent } from './followings/followings.component';

@NgModule({
  declarations: [
    PagenotfoundComponent,
    ErrorComponent,
    SearchComponent,
    PostsListComponent,
    ProfileTimelineComponent,
    ProfileFollowersComponent,
    ProfilePhotosComponent,
    ProfileVideosComponent,
    UserProfileHeaderComponent,
    NotificationsComponent,
    FollowingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdbModule,
    NgxMasonryModule,
    RouterModule
  ],
  exports: [
    PagenotfoundComponent,
    ErrorComponent,
    SearchComponent,
    PostsListComponent,
    ProfileTimelineComponent,
    ProfileFollowersComponent,
    ProfilePhotosComponent,
    ProfileVideosComponent,
    UserProfileHeaderComponent,
    NotificationsComponent,
    FollowingsComponent
  ]
})
export class ComponentsModule { }
