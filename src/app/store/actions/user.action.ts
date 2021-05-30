import { createAction, props } from '@ngrx/store'
import { SearchUserInput, UpdateUserInput } from '../../interfaces/user.interface'
import { User } from '../../models/user.model'

export enum UserActionTypes {
  getUser  = '[User] GET_USER',
  getUserComplete = '[User] GET_USER_COMPLETE',
  getUserError = '[User] GET_USER_ERROR',

  searchUsers  = '[User] SEARCH_USERS',
  searchMoreUsers = '[User] SEARCH_MORE_USERS',
  searchUsersComplete = '[User] SEARCH_USERS_COMPLETE',
  searchUsersError = '[User] SEARCH_USERS_ERROR',

  updateUser = '[User] UPDATE_USER',
  updateUserComplete = '[User] UPDATE_USER_COMPLETE',
  updateUserError = '[User] UPDATE_USER_ERROR',

  deleteUser = '[User] DELETE_USER',
  deleteUserComplete = '[User] DELETE_USER_COMPLETE',
  deleteUserError = '[User] DELETE_USER_ERROR',

  updateFollowers = '[User] UPDATE_FOLLOWERS'
}

//Get
export const GetUser = createAction(
  UserActionTypes.getUser,
  props<{ search: SearchUserInput }>()
)

export const GetUserComplete = createAction(
  UserActionTypes.getUserComplete,
  props<{ user: User }>()
)

export const GetUserError = createAction(
  UserActionTypes.getUserError
)

//Search
export const SearchUsers = createAction(
  UserActionTypes.searchUsers,
  props<{ search: SearchUserInput }>()
)

export const SearchMoreUsers = createAction(
  UserActionTypes.searchMoreUsers,
  props<{ search: SearchUserInput }>()
)

export const SearchUsersComplete = createAction(
  UserActionTypes.searchUsersComplete,
  props<{ users: User[] }>()
)

export const SearchUsersError = createAction(
  UserActionTypes.searchUsersError
)

//Update
export const UpdateUser = createAction(
  UserActionTypes.updateUser,
  props<{ input: UpdateUserInput }>()
)

export const UpdateUserComplete = createAction(
  UserActionTypes.updateUserComplete
)

export const UpdateUserError = createAction(
  UserActionTypes.updateUserError
)

//Delete
export const DeleteUser = createAction(
  UserActionTypes.deleteUser
)

export const DeleteUserComplete = createAction(
  UserActionTypes.deleteUserComplete
)

export const DeleteUserError = createAction(
  UserActionTypes.deleteUserError
)

export const UpdateFollowers = createAction(
  UserActionTypes.updateFollowers,
  props<{ user: User, follower: User }>()
)
