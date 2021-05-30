import { Action, createReducer, on } from '@ngrx/store';
import * as authActions from '../actions/auth.action';
import { User } from '../../models/user.model';
import { Auth } from '../../interfaces/auth.interface';
import { Register } from '../../interfaces/register.interface';

export const authFeatureKey = 'auth';

export interface AuthState {
  auth?: Auth | Register,
  profile?: User,
  isLoggedIn: boolean,
  error: boolean,
  isLoading: boolean
}

export const initialState: AuthState = {
  auth: undefined,
  profile: undefined,
  isLoggedIn: false,
  error: false,
  isLoading: false
};

export const authReducer = createReducer(
  initialState,

  //Initial action
  on(authActions.InitialAction, (state) => ({ ...state, isLoading: false, auth: undefined, error: false, isLoggedIn: false, profile: undefined })),

  //UpdateProfile
  on(authActions.UpdateProfile, (state, { profile }) => ({ ...state, profile })),

  //Check auth
  on(authActions.CheckAuth, (state) => ({ ...state, isLoading: true, error: false })),
  on(authActions.CheckAuthComplete, (state) => ({ ...state, isLoggedIn: true, isLoading: false })),
  on(authActions.CheckAuthError, (state) => ({ ...state, isLoggedIn: false, error: true, isLoading: false })),

  //Login
  on(authActions.LoginUser, (state, { auth }) => ({ ...state, auth, profile: undefined, isLoading: true, error: false })),
  on(authActions.LoginUserComplete, (state, { profile }) => ({ ...state, profile, auth: undefined, isLoggedIn: true, isLoading: false })),
  on(authActions.LoginUserError, (state) => ({ ...state, auth: undefined, error: true, isLoading: false })),

  //Register
  on(authActions.RegisterUser, (state, { auth }) => ({ ...state, auth, profile: undefined, isLoading: true, error: false })),
  on(authActions.RegisterUserComplete, (state, { profile }) => ({ ...state, profile, auth: undefined, isLoggedIn: true, isLoading: false })),
  on(authActions.RegisterUserError, (state) => ({ ...state, error: true, auth: undefined, isLoading: false})),

  //Logout
  on(authActions.LogoutUser, (state) => ({ ...state, isLoading: true, error: false })),
  on(authActions.LogoutUserComplete, (state) => ({ ...state, isLoading: false, profile: undefined, isLoggedIn: false})),
  on(authActions.LogoutUserError, (state) => ({ ...state, isLoading: false, error: true }))
);
