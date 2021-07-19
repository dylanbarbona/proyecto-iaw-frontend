import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CommentService } from 'src/app/services/comment.service';
import * as commentActions from '../actions/comment.action'
import { Comment } from "../../models/comment.model";

@Injectable()
export class CommentEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly commentService: CommentService
  ){ }

  searchComments$ = createEffect(() => this.actions$.pipe(
    ofType(commentActions.CommentActionTypes.searchComments, commentActions.CommentActionTypes.searchMoreComments),
    mergeMap(({ post, search }) => this.commentService.getAll(post, search).pipe(
      map((comments: Comment[]) => commentActions.SearchCommentsComplete({ post, comments })),
      catchError(async () => commentActions.SearchCommentsError())
    ))
  ))

  createComment$ = createEffect(() => this.actions$.pipe(
    ofType(commentActions.CreateComment),
    mergeMap(({ post, input }) => this.commentService.create(post, input).pipe(
      map((comment) => commentActions.CreateCommentComplete({ post, comment })),
      catchError(async () => commentActions.CreateCommentError)
    ))
  ))

  updateComment$ = createEffect(() => this.actions$.pipe(
    ofType(commentActions.UpdateComment),
    mergeMap(({ post, search, input }) => this.commentService.update(post, search, input).pipe(
        map((comment) => commentActions.UpdateCommentComplete({ post, comment })),
        catchError(async () => commentActions.UpdateCommentError())
    ))
  ))

  deleteComment$ = createEffect(() => this.actions$.pipe(
    ofType(commentActions.DeleteComment),
    mergeMap(({ post, search }) => this.commentService.delete(post, search).pipe(
        map((comment) => commentActions.DeleteCommentComplete({ post, comment })),
        catchError(async () => commentActions.DeleteCommentError())
    ))
  ))
}
