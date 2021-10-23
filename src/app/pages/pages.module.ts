import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { NgrxModule } from '../store/ngrx.module';
import { MdbModule } from 'mdb-angular-ui-kit';

import { TemplateComponent } from './template/template.component';
import { PagesComponent } from './pages.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ComponentsModule } from '../components/components.module';
import { CreatePostComponent } from './create-post/create-post.component';
import { ProfileComponent } from './profile/profile.component';
import { ShowPostComponent } from './show-post/show-post.component';

@NgModule({
  declarations: [
    TemplateComponent,
    PagesComponent,
    IndexComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CreatePostComponent,
    ProfileComponent,
    ShowPostComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MdbModule,
    NgrxModule,
    ComponentsModule,
    SharedModule
  ]
})
export class PagesModule { }
