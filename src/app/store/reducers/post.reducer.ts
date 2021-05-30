import { Action, createReducer, on } from '@ngrx/store';
import * as postActions from '../actions/post.action';
import { Post } from '../../models/post.model';

export const postFeatureKey = 'post';

export interface PostState {
  posts: Post[],
  post?: Post,
  isLoading: boolean
  error: boolean,
}

export const initialState: PostState = {
  posts: [],
  post: undefined,
  isLoading: false,
  error: false
}

export const postReducer = createReducer(
  initialState,

  //Search
  on(postActions.GetRandomPosts, (state) => ({ ...state, isLoading: true, error: false, posts: [] })),
  on(postActions.GetFollowingPosts, (state) => ({ ...state, isLoading: true, error: false, posts: [] })),
  on(postActions.getPostsByDescription, (state) => ({ ...state, isLoading: true, error: false, posts: [] })),
  on(postActions.GetPostsByUser, (state) => ({ ...state, isLoading: true, error: false, posts: [] })),

  on(postActions.GetMoreRandomPosts, (state) => ({ ...state, isLoading: true, error: false, posts: [] })),
  on(postActions.GetMoreFollowingPosts, (state) => ({ ...state, isLoading: true, error: false, posts: [] })),
  on(postActions.GetMorePostsByDescription, (state) => ({ ...state, isLoading: true, error: false, posts: [] })),
  on(postActions.GetMorePostsByUser, (state) => ({ ...state, isLoading: true, error: false, posts: [] })),

  on(postActions.GetPostsComplete, (state, { posts }) => ({ ...state, isLoading: false, error: true, posts: state.posts.concat(posts) })),
  on(postActions.GetPostsError, (state) => ({ ...state, isLoading: false, error: true })),

  //Get
  on(postActions.GetPost, (state) => ({ ...state, isLoading: true, error: false, post: undefined })),
  on(postActions.GetPostComplete, (state, { post }) => ({ ...state, isLoading: false, error: true, post })),
  on(postActions.GetPostError, (state) => ({ ...state, isLoading: false, error: true, post: undefined })),

  //Create
  on(postActions.CreatePost, (state) => ({ ...state, isLoading: true, error: false, post: undefined })),
  on(postActions.CreatePostComplete, (state, { post }) => ({ ...state, isLoading: true, error: false, post })),
  on(postActions.CreatePost, (state) => ({ ...state, isLoading: false, error: true, post: undefined })),

  //Update
  on(postActions.UpdatePost, (state) => ({ ...state, isLoading: true, error: false, post: undefined })),
  on(postActions.UpdatePostComplete, (state, { post }) => ({ ...state, isLoading: true, error: false, post })),
  on(postActions.UpdatePost, (state) => ({ ...state, isLoading: false, error: true, post: undefined })),

  //Delete
  on(postActions.DeletePost, (state) => ({ ...state, isLoading: true, error: false, post: undefined })),
  on(postActions.DeletePostComplete, (state, { post }) => ({ ...state, isLoading: true, error: false, post })),
  on(postActions.DeletePost, (state) => ({ ...state, isLoading: false, error: true, post: undefined })),

  //Like
  //Comments
)
