import { createAction, props } from '@ngrx/store'
import { SearchFollowInput } from 'src/app/interfaces/follow.interface'
import { User } from '../../models/user.model'

export enum FollowActionTypes {
  getFollowers  = '[Follow] GET_FOLLOWERS',
  getMoreFollowers = '[Follow] GET_MORE_FOLLOWERS',
  getFollowersComplete = '[Follow] GET_FOLLOWERS_COMPLETE',
  getFollowersError = '[Follow] GET_FOLLOWERS_ERROR',

  getFollowings  = '[Follow] GET_FOLLOWINGS',
  getMoreFollowings = '[Follow] GET_MORE_FOLLOWINGS',
  getFollowingsComplete = '[Follow] GET_FOLLOWINGS_COMPLETE',
  getFollowingsError = '[Follow] GET_FOLLOWINGS_ERROR',

  followUser  = '[Follow] FOLLOW_USER',
  followUserComplete = '[Follow] FOLLOW_USER_COMPLETE',
  followUserError = '[Follow] FOLLOW_USER_ERROR',
}

//GET-FOLLOWERS
export const GetFollowers = createAction(
  FollowActionTypes.getFollowers,
  props<{ user: User, search: SearchFollowInput }>()
)

export const GetFollowersComplete = createAction(
  FollowActionTypes.getFollowersComplete,
  props<{ followers: User[] }>()
)

export const GetFollowersError = createAction(
  FollowActionTypes.getFollowersError
)

//GET-FOLLOWINGS
export const GetFollowings = createAction(
  FollowActionTypes.getFollowings,
  props<{ user: User, search: SearchFollowInput }>()
)

export const GetFollowingsComplete = createAction(
  FollowActionTypes.getFollowingsComplete,
  props<{ followings: User[] }>()
)

export const GetFollowingsError = createAction(
  FollowActionTypes.getFollowingsError
)

//FOLLOW
export const FollowUser = createAction(
  FollowActionTypes.followUser,
  props<{ user: User, search: SearchFollowInput }>()
)

export const FollowUserComplete = createAction(
  FollowActionTypes.followUserComplete,
  props<{ following: User }>()
)

export const FollowUserError = createAction(
  FollowActionTypes.followUserError
)

