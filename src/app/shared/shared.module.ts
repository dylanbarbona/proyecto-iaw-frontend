import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbModule } from 'mdb-angular-ui-kit';

import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { NgrxModule } from '../store/ngrx.module';

import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    NgrxModule,
    MdbModule,    
  ],
  exports:[
    HeaderComponent
  ]
})
export class SharedModule { }
