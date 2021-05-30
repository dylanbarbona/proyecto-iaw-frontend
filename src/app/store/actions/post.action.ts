import { createAction, props } from '@ngrx/store'
import { SearchPostInput, CreatePostInput } from '../../interfaces/post.interface'
import { Post } from '../../models/post.model'

export enum PostActionTypes {
  getRandomPosts  = '[Post] GET_RANDOM_POSTS',
  getFollowingPosts = '[Post] GET_FOLLOWING_POSTS',
  getPostsByDescription = '[Post] GET_POSTS_BY_DESCRIPTION',
  getPostsByUser ='[Post] GET_POSTS_BY_USER',

  getMoreRandomPosts = '[Post] GET_MORE_RANDOM_POSTS',
  getMoreFollowingPosts = '[Post] GET_MORE_FOLLOWING_POSTS',
  getMorePostsByDescription = '[Post] GET_MORE_POSTS_BY_DESCRIPTION',
  getMorePostsByUser = '[Post] GET_MORE_POSTS_BY_USER',

  getPostsComplete = '[Post] GET_POSTS_COMPLETE',
  getPostsError = '[Post] GET_POSTS_ERROR',

  getPost = '[Post] GET_POST',
  getPostComplete = '[Post] GET_POST_COMPLETE',
  getPostError = '[Post] GET_POST_ERROR',

  createPost = '[Post] CREATE_POST',
  createPostComplete = '[Post] CREATE_POST_COMPLETE',
  createPostError = '[Post] CREATE_POST_ERROR',

  updatePost = '[Post] UPDATE_POST',
  updatePostComplete = '[Post] UPDATE_POST_COMPLETE',
  updatePostError = '[Post] UPDATE_POST_ERROR',

  deletePost = '[Post] DELETE_POST',
  deletePostComplete = '[Post] DELETE_POST_COMPLETE',
  deletePostError = '[Post] DELETE_POST_ERROR',

  updateLikes = '[Post] UPDATE_LIKES_POST',
  updateComments = '[Post] UPDATE_COMMENTS_POST'
}

//Get
export const GetRandomPosts = createAction(
  PostActionTypes.getRandomPosts,
  props<{ search: SearchPostInput }>()
)

export const GetMoreRandomPosts = createAction(
  PostActionTypes.getMoreRandomPosts,
  props<{ search: SearchPostInput }>()
)

export const GetFollowingPosts = createAction(
  PostActionTypes.getFollowingPosts,
  props<{ search: SearchPostInput }>()
)

export const GetMoreFollowingPosts = createAction(
  PostActionTypes.getMoreFollowingPosts,
  props<{ search: SearchPostInput }>()
)

export const GetPostsByUser = createAction(
  PostActionTypes.getPostsByUser,
  props<{ search: SearchPostInput }>()
)

export const GetMorePostsByUser = createAction(
  PostActionTypes.getMorePostsByUser,
  props<{ search: SearchPostInput }>()
)

export const getPostsByDescription = createAction(
  PostActionTypes.getPostsByDescription,
  props<{ search: SearchPostInput }>()
)

export const GetMorePostsByDescription = createAction(
  PostActionTypes.getMorePostsByDescription,
  props<{ search: SearchPostInput }>()
)

export const GetPostsComplete = createAction(
  PostActionTypes.getPostsComplete,
  props<{ posts: Post[] }>()
)

export const GetPostsError = createAction(
  PostActionTypes.getPostsError
)

export const GetPost = createAction(
  PostActionTypes.getPost,
  props<{ search: SearchPostInput }>()
)

export const GetPostComplete = createAction(
  PostActionTypes.getPostComplete,
  props<{ post: Post }>()
)

export const GetPostError = createAction(
  PostActionTypes.getPostError
)

//CREATE
export const CreatePost = createAction(
  PostActionTypes.createPost,
  props<{ input: CreatePostInput }>()
)

export const CreatePostComplete = createAction(
  PostActionTypes.createPostComplete,
  props<{ post: Post }>()
)

export const CreatePostError = createAction(
  PostActionTypes.createPostError
)

//UPDATE
export const UpdatePost = createAction(
  PostActionTypes.updatePost,
  props<{ search: SearchPostInput, input: CreatePostInput }>()
)

export const UpdatePostComplete = createAction(
  PostActionTypes.updatePostComplete,
  props<{ post: Post }>()
)

export const UpdatePostError = createAction(
  PostActionTypes.updatePostError
)

//DELETE
export const DeletePost = createAction(
  PostActionTypes.deletePost,
  props<{ search: SearchPostInput }>()
)

export const DeletePostComplete = createAction(
  PostActionTypes.deletePostComplete,
  props<{ post: Post }>()
)

export const DeletePostError = createAction(
  PostActionTypes.deletePostError
)
