import { createReducer, on } from '@ngrx/store';
import * as userActions from '../actions/user.action';
import { EmptyUser, User } from '../../models/user.model';

export const userFeatureKey = 'user';

export interface UserState {
  user: User,
  users: User[]
  isLoading: boolean
  error: boolean,
}

export const initialState: UserState = {
  user: new EmptyUser(),
  users: [],
  isLoading: false,
  error: false
}

export const userReducer = createReducer(
  initialState,

  //GetUser
  on(userActions.GetUser, (state) => ({ ...state, isLoading: true, error: false })),
  on(userActions.GetUserComplete, (state, { user }) => ({ ...state, isLoading: false, user })),
  on(userActions.GetUserError, (state) => ({ ...state, isLoading: false, error: true, user: new EmptyUser() })),

  //SearchUser
  on(userActions.SearchUsers, (state) => ({ ...state, isLoading: true, error: false, users: [] })),
  on(userActions.SearchMoreUsers, (state) => ({ ...state, isLoading: true, error: false })),
  on(userActions.SearchUsersComplete, (state, { users }) => ({ ...state, isLoading: false, users: state.users.concat(users) })),
  on(userActions.SearchUsersError, (state) => ({ ...state, isLoading: false, error: true })),

  //UpdateUser
  on(userActions.UpdateUser, (state) => ({ ...state, isLoading: true, error: false })),
  on(userActions.UpdateUserComplete, (state) => ({ ...state, isLoading: false })),
  on(userActions.UpdateUserError, (state) => ({ ...state, isLoading: false, error: true })),

  //DeleteUser
  on(userActions.DeleteUser, (state) => ({ ...state, isLoading: true, error: false })),
  on(userActions.DeleteUserComplete, (state) => ({ ...state, isLoading: false })),
  on(userActions.DeleteUserError, (state) => ({ ...state, isLoading: false, error: true })),

  //Followers
)
