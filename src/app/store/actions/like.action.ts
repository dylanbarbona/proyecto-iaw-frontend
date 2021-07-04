import { createAction, props } from '@ngrx/store'
import { Like } from '../../models/like.model'
import { SearchLikeInput } from '../../interfaces/like.interface'
import { Post } from '../../models/post.model'

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
  props<{ post: string, search?: SearchLikeInput }>()
)

export const GetMoreLikes = createAction(
  LikeActionTypes.getMoreLikes,
  props<{ post: string, search?: SearchLikeInput }>()
)

export const GetLikesComplete = createAction(
  LikeActionTypes.getLikesComplete,
  props<{ post: string, likes: Like[] }>()
)

export const GetLikesError = createAction(
  LikeActionTypes.getLikesError
)

//LIKE
export const LikePost = createAction(
  LikeActionTypes.likePost,
  props<{ post: string }>()
)

export const LikePostComplete = createAction(
  LikeActionTypes.likePostComplete,
  props<{ post: string, likes: Like[] }>()
)

export const LikePostError = createAction(
  LikeActionTypes.likePostError
)
