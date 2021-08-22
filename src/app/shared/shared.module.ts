import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbModule } from 'mdb-angular-ui-kit';

import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { NgrxModule } from '../store/ngrx.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PostsComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    NgrxModule,
    MdbModule,
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    PostsComponent
  ]
})
export class SharedModule { }
