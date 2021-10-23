import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbModule } from 'mdb-angular-ui-kit';

import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { NgrxModule } from '../store/ngrx.module';
import { NgxMasonryModule } from 'ngx-masonry';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostsComponent } from './posts/posts.component';
import { HeaderRegisterComponent } from './header-register/header-register.component';
import { FooterRegisterComponent } from './footer-register/footer-register.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PostsComponent,
    HeaderRegisterComponent,
    FooterRegisterComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    NgrxModule,
    MdbModule,
    NgxMasonryModule,
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    PostsComponent,
    HeaderRegisterComponent,
    FooterRegisterComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
