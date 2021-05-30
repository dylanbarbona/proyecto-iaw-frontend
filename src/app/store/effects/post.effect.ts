import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, mergeMap, map } from 'rxjs/operators';

import * as postActions from '../actions/post.action';
import { PostService } from '../../services/post.service';

@Injectable()
export class UserEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly postService: PostService) { }

  getFollowingPosts$ = createEffect(() => this.actions$.pipe(
    ofType(postActions.PostActionTypes.getFollowingPosts, postActions.PostActionTypes.getMoreFollowingPosts),
    mergeMap(({ search }) => this.postService.getByFollowingUsers(search).pipe(
      map(posts => postActions.GetPostsComplete({ posts })),
      catchError(async () => postActions.GetPostsError())
    )),
  ))

  getPostsByDescription$ = createEffect(() => this.actions$.pipe(
    ofType(postActions.PostActionTypes.getPostsByDescription, postActions.PostActionTypes.getMorePostsByDescription),
    mergeMap(({ search }) => this.postService.getByDescription(search).pipe(
      map(posts => postActions.GetPostsComplete({ posts })),
      catchError(async () => postActions.GetPostsError())
    )),
  ))

  getPostsByUser$ = createEffect(() => this.actions$.pipe(
    ofType(postActions.PostActionTypes.getPostsByUser, postActions.PostActionTypes.getMorePostsByUser),
    mergeMap(({ search }) => this.postService.getByUser(search).pipe(
      map(posts => postActions.GetPostsComplete({ posts })),
      catchError(async () => postActions.GetPostsError())
    )),
  ))

  getRandomPosts$ = createEffect(() => this.actions$.pipe(
    ofType(postActions.PostActionTypes.getRandomPosts, postActions.PostActionTypes.getMoreRandomPosts),
    mergeMap(({ search }) => this.postService.getRandomPosts(search).pipe(
      map(posts => postActions.GetPostsComplete({ posts })),
      catchError(async () => postActions.GetPostsError())
    )),
  ))

  getPost$ = createEffect(() => this.actions$.pipe(
    ofType(postActions.PostActionTypes.getPost),
    mergeMap(({ search }) => this.postService.get(search).pipe(
      map(post => postActions.GetPostComplete({ post })),
      catchError(async () => postActions.GetPostError())
    )),
  ))

  createPost$ = createEffect(() => this.actions$.pipe(
    ofType(postActions.PostActionTypes.createPost),
    mergeMap(({ input }) => this.postService.create(input).pipe(
      map(post => postActions.CreatePostComplete({ post })),
      catchError(async () => postActions.CreatePostError())
    )),
  ))

  updatePost$ = createEffect(() => this.actions$.pipe(
    ofType(postActions.PostActionTypes.updatePost),
    mergeMap(({ search, input }) => this.postService.update(search, input).pipe(
      map(post => postActions.UpdatePostComplete({ post })),
      catchError(async () => postActions.UpdatePostError())
    )),
  ))

  deletePost$ = createEffect(() => this.actions$.pipe(
    ofType(postActions.PostActionTypes.deletePost),
    mergeMap(({ search }) => this.postService.delete(search).pipe(
      map(post => postActions.DeletePostComplete({ post })),
      catchError(async () => postActions.DeletePostError())
    )),
  ))
}
