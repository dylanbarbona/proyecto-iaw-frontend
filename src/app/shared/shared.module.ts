import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { SearchComponent } from './search/search.component';
import { TabsComponent } from './tabs/tabs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { NgrxModule } from '../store/ngrx.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PostsListComponent,
    SearchComponent,
    TabsComponent,
    GalleryComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    NgrxModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    PostsListComponent,
    SearchComponent,
    TabsComponent,
    GalleryComponent,
  ]
})
export class SharedModule { }
