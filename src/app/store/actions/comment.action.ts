import { createAction, props } from '@ngrx/store'
import { CreateCommentInput, SearchCommentInput, UpdateCommentInput } from '../../interfaces/comment.interface'
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

//Search
export const SearchComments = createAction(
  CommentActionTypes.searchComments,
  props<{ post: string, search: SearchCommentInput }>()
)

export const SearchMoreComments = createAction(
  CommentActionTypes.searchMoreComments,
  props<{ post: string, search: SearchCommentInput }>()
)

export const SearchCommentsComplete = createAction(
  CommentActionTypes.searchCommentsComplete,
  props<{ post: string, comments: Comment[] }>()
)

export const SearchCommentsError = createAction(
  CommentActionTypes.searchCommentsError
)

//Create
export const CreateComment = createAction(
  CommentActionTypes.createComment,
  props<{ post: string, input: CreateCommentInput }>()
)

export const CreateCommentComplete = createAction(
  CommentActionTypes.createCommentComplete,
  props<{ post: string, comment: Comment }>()
)

export const CreateCommentError = createAction(
  CommentActionTypes.searchCommentsError
)

//Update
export const UpdateComment = createAction(
  CommentActionTypes.updateComment,
  props<{ post: string, search: SearchCommentInput, input: UpdateCommentInput }>()
)

export const UpdateCommentComplete = createAction(
  CommentActionTypes.updateCommentComplete,
  props<{ post: string, comment: Comment }>()
)

export const UpdateCommentError = createAction(
  CommentActionTypes.updateCommentError
)

//Delete
export const DeleteComment = createAction(
  CommentActionTypes.deleteComment,
  props<{ post: string, search: SearchCommentInput }>()
)

export const DeleteCommentComplete = createAction(
  CommentActionTypes.deleteCommentComplete,
  props<{ post: string, comment: Comment }>()
)

export const DeleteCommentError = createAction(
  CommentActionTypes.deleteCommentError
)
