import { createReducer, on } from '@ngrx/store';

import * as postActions from '../actions/post.action';
import * as likeActions from '../actions/like.action';
import * as commentActions from '../actions/comment.action';

import { Post, EmptyPost } from '../../models/post.model';

export const postFeatureKey = 'post';

export interface PostState {
  posts: Post[],
  post: Post,
  isLoading: boolean
  error: boolean,
}

export const initialState: PostState = {
  post: new EmptyPost(),
  posts: [],
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

  on(postActions.GetPostsComplete, (state, { posts }) => ({ ...state, isLoading: false, posts: state.posts.concat(posts) })),
  on(postActions.GetPostsError, (state) => ({ ...state, isLoading: false, error: true })),

  //Get
  on(postActions.GetPost, (state) => ({ ...state, isLoading: true, error: false })),
  on(postActions.GetPostComplete, (state, { post }) => ({ ...state, isLoading: false, post })),
  on(postActions.GetPostError, (state) => ({ ...state, isLoading: false, error: true, post: new EmptyPost() })),

  //Create
  on(postActions.CreatePost, (state) => ({ ...state, isLoading: true, error: false })),
  on(postActions.CreatePostComplete, (state, { post }) => ({ ...state, isLoading: true, post })),
  on(postActions.CreatePost, (state) => ({ ...state, isLoading: false, error: true, post: new EmptyPost() })),

  //Update
  on(postActions.UpdatePost, (state) => ({ ...state, isLoading: true, error: false })),
  on(postActions.UpdatePostComplete, (state, { post }) => ({ ...state, isLoading: true, post })),
  on(postActions.UpdatePost, (state) => ({ ...state, isLoading: false, error: true, post: new EmptyPost() })),

  //Delete
  on(postActions.DeletePost, (state) => ({ ...state, isLoading: true, error: false })),
  on(postActions.DeletePostComplete, (state, { post }) => ({ ...state, isLoading: true, post })),
  on(postActions.DeletePost, (state) => ({ ...state, isLoading: false, error: true, post: new EmptyPost() })),

  //Like
  //Get likes
  on(likeActions.GetLikes, (state) => ({ ...state, isLoading: true, error: false })),
  on(likeActions.GetLikesComplete, (state, { post, likes }) => {
    const updatedPosts = state.posts.map(p => {
      let newPost = Object.assign({}, p)
      if(p._id == post){
        newPost.likes = likes
        return newPost
      }
      return p
    })
    return {
      ...state,
      isLoading: false,
      posts: updatedPosts
    }
  }),
  on(likeActions.GetLikesError, (state) => ({ ...state, isLoading: false, error: true })),

  //Like
  on(likeActions.LikePost, (state) => ({ ...state, isLoading: true, error: false })),
  on(likeActions.LikePostComplete, (state, { post, likes }) => {
    const updatedPosts = state.posts.map(p => {
      let newPost = Object.assign({}, p)
      if(p._id == post){
        newPost.likes = likes
        return newPost
      }
      return p
    })
    return {
      ...state,
      isLoading: false,
      posts: updatedPosts
    }
  }),
  on(likeActions.LikePostError, (state) => ({ ...state, isLoading: false, error: true })),

  //Comments
  //Search
  on(commentActions.SearchComments, (state) => ({ ...state, isLoading: true, error: false })),
  on(commentActions.SearchCommentsComplete, (state, { post, comments }) => {
    const updatedPosts = state.posts.map(p => {
      let newPost = Object.assign({}, p)
      if(p._id == post){
        newPost.comments = comments
        return newPost
      }
      return p
    })
    return {
      ...state,
      isLoading: false,
      posts: updatedPosts
    }
  }),
  on(commentActions.SearchCommentsComplete, (state, { post, comments }) => {
    const updatedPosts = state.posts.map(p => {
      let newPost = Object.assign({}, p)
      if(p._id == post){
        newPost.comments = comments
        return newPost
      }
      return p
    })
    return {
      ...state,
      isLoading: false,
      posts: updatedPosts
    }
  }),
  on(commentActions.SearchCommentsError, (state) => ({ ...state, isLoading: false, error: true })),

  // Create
  on(commentActions.CreateComment, (state) => ({ ...state, isLoading: true, error: false })),
  on(commentActions.CreateCommentComplete, (state, { post, comment }) => {
    const updatedPosts = state.posts.map(p => {
      let newPost = Object.assign({}, p)
      if(p._id == post){
        newPost.comments.push(comment)
        return newPost
      }
      return p
    })
    return {
      ...state,
      isLoading: false,
      posts: updatedPosts
    }
  }),
  on(commentActions.CreateCommentError, (state) => ({ ...state, isLoading: false, error: true })),

  // Update
  on(commentActions.UpdateComment, (state) => ({ ...state, isLoading: true, error: false })),
  on(commentActions.UpdateCommentComplete, (state, { post, comment }) => {
    const updatedPosts = state.posts.map(p => {
      let newPost = Object.assign({}, p)
      if(p._id == post){
        let newComments = p.comments.filter(c => c._id != comment._id)
        newComments.push(comment)
        newPost.comments = newComments
        return newPost
      }
      return p
    })
    return {
      ...state,
      isLoading: false,
      posts: updatedPosts
    }
  }),
  on(commentActions.UpdateCommentError, (state) => ({ ...state, isLoading: false, error: true })),

  // Delete
  on(commentActions.DeleteComment, (state) => ({ ...state, isLoading: true, error: false })),
  on(commentActions.DeleteCommentComplete, (state, { post, comment }) => {
    const updatedPosts = state.posts.map(p => {
      let newPost = Object.assign({}, p)
      if(p._id == post){
        newPost.comments = p.comments.filter(c => c._id != comment._id)
        return newPost
      }
      return p
    })
    return {
      ...state,
      isLoading: false,
      posts: updatedPosts
    }
  }),
  on(commentActions.DeleteCommentError, (state) => ({ ...state, isLoading: false, error: true })),
)
