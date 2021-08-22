import { createReducer, on } from '@ngrx/store';
import * as authActions from '../actions/auth.action';
import { EmptyUser, User } from '../../models/user.model';
import { Auth, EmptyAuth } from '../../interfaces/auth.interface';
import { Register } from '../../interfaces/register.interface';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

export const authFeatureKey = 'auth';

export interface AuthState {
  auth: Auth | Register,
  profile: User,
  isLoggedIn: boolean,
  error: boolean,
  isLoading: boolean
}

export const initialState: AuthState = {
  auth: EmptyAuth.getInstance(),
  profile: EmptyUser.getInstance(),
  isLoggedIn: false,
  error: false,
  isLoading: false,
}

export const authReducer = createReducer(
  initialState,

  //UpdateProfile
  on(authActions.UpdateProfile, (state, { user }) => ({ ...state, profile: user })),

  //Check auth
  on(authActions.CheckAuth, (state) => ({ ...state })),
  on(authActions.CheckAuthComplete, (state, { user }) => ({ ...state, profile: user, isLoggedIn: true })),
  on(authActions.CheckAuthError, (state) => ({ ...state, isLoggedIn: false })),

  //Login
  on(authActions.LoginUser, (state, { auth }) => ({ ...state, auth, isLoading: true, error: false })),
  on(authActions.LoginUserComplete, (state, { profile }) => ({ ...state, profile, auth: EmptyAuth.getInstance(), isLoggedIn: true, isLoading: false })),
  on(authActions.LoginUserError, (state) => ({ ...state, auth: EmptyAuth.getInstance(), error: true, isLoading: false })),

  //Register
  on(authActions.RegisterUser, (state, { auth }) => ({ ...state, auth, isLoading: true, error: false })),
  on(authActions.RegisterUserComplete, (state, { profile }) => ({ ...state, profile, auth: EmptyAuth.getInstance(), isLoggedIn: true, isLoading: false })),
  on(authActions.RegisterUserError, (state) => ({ ...state, error: true, auth: EmptyAuth.getInstance(), isLoading: false})),

  //Logout
  on(authActions.LogoutUser, (state) => ({ ...state, isLoading: true, error: false })),
  on(authActions.LogoutUserComplete, (state) => ({ ...state, isLoading: false, profile: EmptyUser.getInstance(), isLoggedIn: false})),
  on(authActions.LogoutUserError, (state) => ({ ...state, isLoading: false, error: true }))
);
