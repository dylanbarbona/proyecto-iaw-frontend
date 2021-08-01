import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { NgrxModule } from '../store/ngrx.module';
import { MdbModule } from 'mdb-angular-ui-kit';

import { PagesComponent } from './pages.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    PagesComponent,
    IndexComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
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
