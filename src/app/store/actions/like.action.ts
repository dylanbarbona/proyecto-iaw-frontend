import { createAction, props } from '@ngrx/store'
import { Like } from '../../models/like.model'
import { SearchLikeInput } from '../../interfaces/like.interface'

export enum LikeActionTypes {
  getLikes  = '[Like] GET_LIKES',
  getMoreLikes = '[Like] GET_MORE_LIKES',
  getLikesComplete = '[Like] GET_LIKES_COMPLETE',
  getLikesError = '[Like] GET_LIKES_ERROR',

  likePost  = '[Like] LIKE',
  likePostComplete = '[Like] LIKE_COMPLETE',
  likePostError = '[Like] LIKE_ERROR',
}

//GET
export const GetLikes = createAction(
  LikeActionTypes.getLikes,
  props<{ search: SearchLikeInput }>()
)

export const GetMoreLikes = createAction(
  LikeActionTypes.getMoreLikes,
  props<{ search: SearchLikeInput }>()
)

export const GetLikesComplete = createAction(
  LikeActionTypes.getLikesComplete,
  props<{ likes: Like[] }>()
)

export const GetLikesError = createAction(
  LikeActionTypes.getLikesError
)

//LIKE
export const LikePost = createAction(
  LikeActionTypes.likePost,
  props<{ search: SearchLikeInput }>()
)

export const LikePostComplete = createAction(
  LikeActionTypes.likePostComplete,
  props<{ likes: Like[] }>()
)

export const LikePostError = createAction(
  LikeActionTypes.likePostError
)
