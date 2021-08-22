import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MdbModule } from 'mdb-angular-ui-kit';
import { NgxMasonryModule } from 'ngx-masonry';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ErrorComponent } from './error/error.component';
import { SearchComponent } from './search/search.component';
import { IndexCarouselComponent } from './index-carousel/index-carousel.component';
import { LoginCardComponent } from './login-card/login-card.component';
import { PhotoPanelComponent } from './photo-panel/photo-panel.component';
import { RegisterCardComponent } from './register-card/register-card.component';
import { SearchCarouselComponent } from './search-carousel/search-carousel.component';
import { HomeTabsComponent } from './home-tabs/home-tabs.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    PagenotfoundComponent,
    ErrorComponent,
    SearchComponent,
    IndexCarouselComponent,
    LoginCardComponent,
    PhotoPanelComponent,
    RegisterCardComponent,
    SearchCarouselComponent,
    HomeTabsComponent,
    PostComponent
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
    IndexCarouselComponent,
    LoginCardComponent,
    PhotoPanelComponent,
    RegisterCardComponent,
    SearchCarouselComponent,
    HomeTabsComponent,
    PostComponent
  ]
})
export class ComponentsModule { }
