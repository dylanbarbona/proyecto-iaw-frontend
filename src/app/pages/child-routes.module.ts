import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { GuessGuard } from '../guards/guess.guard';

import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ShowPostComponent } from './show-post/show-post.component';

const childRoutes: Routes = [
  { path: '', component: IndexComponent },//, canActivate: [GuessGuard], canLoad: [GuessGuard], },
  { path: 'login', component: LoginComponent },//, canActivate: [GuessGuard], canLoad: [GuessGuard], },
  { path: 'register', component: RegisterComponent },//, canActivate: [GuessGuard], canLoad: [GuessGuard], },
  { path: 'home', component: HomeComponent }, // canActivate: [AuthGuard], canLoad: [AuthGuard], },
  { path: 'profile', component: ProfileComponent }, // canActivate: [AuthGuard], canLoad: [AuthGuard], },
  { path: 'create', component: CreatePostComponent }, // canActivate: [AuthGuard], canLoad: [AuthGuard] },
  { path: 'post/:id', component: ShowPostComponent },
  { path: 'create', component: CreatePostComponent }
]

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesModule { }
