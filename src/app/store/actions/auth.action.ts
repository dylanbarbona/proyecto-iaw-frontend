import { createAction, props } from '@ngrx/store';
import { Auth } from '../../interfaces/auth.interface';
import { User } from 'src/app/models/user.model';
import { Register } from '../../interfaces/register.interface';

export enum AuthActionTypes {
  updateProfile = '[Auth] UPDATE_PROFILE',
  inicialAction = '[Auth] INITIAL_ACTION',

  checkAuth  = '[Auth] CHECK_AUTH',
  checkAuthComplete = '[Auth] CHECK_AUTH_COMPLETE',
  checkAuthError = '[Auth] CHECK_AUTH_ERROR',

  loginUser = '[Auth] LOGIN_USER',
  loginUserComplete ='[Auth] LOGIN_USER_COMPLETE',
  loginUserError = '[Auth] LOGIN_USER_ERROR',

  logoutUser = '[Auth] LOGOUT_USER',
  logoutUserComplete = '[Auth] LOGOUT_USER_COMPLETE',
  logoutUserError = '[Auth] LOGOUT_USER_ERROR',
  
  registerUser = '[Auth] REGISTER_USER',
  registerUserError = '[Auth] REGISTER_USER_ERROR',
  registerUserComplete ='[Auth] REGISTER_USER_COMPLETE',
}

export const UpdateProfile = createAction(
  AuthActionTypes.updateProfile,
  props<{ user?: User }>()
)

export const CheckAuth = createAction(
  AuthActionTypes.checkAuth
)

export const InitialAction = createAction(
  AuthActionTypes.inicialAction
)

export const CheckAuthComplete = createAction(
  AuthActionTypes.checkAuthComplete
)

export const CheckAuthError = createAction(
  AuthActionTypes.checkAuthError
)

export const LoginUser = createAction(
  AuthActionTypes.loginUser,
  props<{ auth?: Auth }>()
)

export const LoginUserComplete = createAction(
  AuthActionTypes.loginUserComplete,
  props<{ profile?: User }>()
)

export const LoginUserError = createAction(
  AuthActionTypes.loginUserError
)

export const RegisterUser = createAction(
  AuthActionTypes.registerUser,
  props<{ auth?: Register }>()
)

export const RegisterUserComplete = createAction(
  AuthActionTypes.registerUserComplete,
  props<{ profile?: User }>()
)

export const RegisterUserError = createAction(
  AuthActionTypes.registerUserError
)

export const LogoutUser = createAction(
  AuthActionTypes.logoutUser
)

export const LogoutUserComplete = createAction(
  AuthActionTypes.logoutUserComplete
)

export const LogoutUserError = createAction(
  AuthActionTypes.logoutUserError
)

