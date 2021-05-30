import { createAction, props } from '@ngrx/store'
import { SearchCommentInput, UpdateCommentInput } from '../../interfaces/comment.interface'
import { Comment } from '../../models/comment.model'

export enum CommentActionTypes {
  getComment  = '[Comment] GET_COMMENT',
  getCommentComplete = '[Comment] GET_COMMENT_COMPLETE',
  getCommentError = '[Comment] GET_COMMENT_ERROR',

  searchComments  = '[Comment] SEARCH_COMMENTS',
  searchMoreComments  = '[Comment] SEARCH_MORE_COMMENTS',
  searchCommentsComplete = '[Comment] SEARCH_COMMENTS_COMPLETE',
  searchCommentsError = '[Comment] SEARCH_COMMENTS_ERROR',

  createComment  = '[Comment] CREATE_COMMENT',
  createCommentComplete = '[Comment] CREATE_COMMENT_COMPLETE',
  createCommentError = '[Comment] CREATE_COMMENT_ERROR',

  updateComment = '[Comment] UPDATE_COMMENT',
  updateCommentComplete = '[Comment] UPDATE_COMMENT_COMPLETE',
  updateCommentError = '[Comment] UPDATE_COMMENT_ERROR',

  deleteComment = '[Comment] DELETE_COMMENT',
  deleteCommentComplete = '[Comment] DELETE_COMMENT_COMPLETE',
  deleteCommentError = '[Comment] DELETE_COMMENT_ERROR',
}

//Get
export const GetComment = createAction(
  CommentActionTypes.getComment,
  props<{ search: SearchCommentInput }>()
)

export const GetCommentComplete = createAction(
  CommentActionTypes.getCommentComplete,
  props<{ comment: Comment }>()
)

export const GetCommentError = createAction(
  CommentActionTypes.getCommentError
)

//Search
export const SearchComments = createAction(
  CommentActionTypes.searchComments,
  props<{ search: SearchCommentInput }>()
)

export const SearchMoreComments = createAction(
  CommentActionTypes.searchMoreComments,
  props<{ search: SearchCommentInput }>()
)

export const SearchCommentsComplete = createAction(
  CommentActionTypes.searchCommentsComplete,
  props<{ Comments: Comment[] }>()
)

export const SearchCommentsError = createAction(
  CommentActionTypes.searchCommentsError
)

//Update
export const UpdateComment = createAction(
  CommentActionTypes.updateComment,
  props<{ search: SearchCommentInput, input: UpdateCommentInput }>()
)

export const UpdateCommentComplete = createAction(
  CommentActionTypes.updateCommentComplete,
  props<{ Comment: Comment }>()
)

export const UpdateCommentError = createAction(
  CommentActionTypes.updateCommentError
)

//Delete
export const DeleteComment = createAction(
  CommentActionTypes.deleteComment,
  props<{ search: SearchCommentInput }>()
)

export const DeleteCommentComplete = createAction(
  CommentActionTypes.deleteCommentComplete,
  props<{ Comment: Comment }>()
)

export const DeleteCommentError = createAction(
  CommentActionTypes.deleteCommentError
)
