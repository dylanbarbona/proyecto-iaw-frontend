import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesRoutingModule } from './pages/pages-routing.module';

import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: 'error', component: ErrorComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
