import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    PagenotfoundComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PagenotfoundComponent,
    ErrorComponent
  ]
})
export class ComponentsModule { }
