import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { catchError } from "rxjs/operators";
import { Like } from "../../models/like.model";
import { LikeService } from "../../services/like.service";

import * as likeActions from '../actions/like.action';

@Injectable()
export class LikeEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly likeService: LikeService
  ){}

  getLikes$ = createEffect(() => this.actions$.pipe(
    ofType(likeActions.LikeActionTypes.getLikes, likeActions.LikeActionTypes.getMoreLikes),
    mergeMap(({ post, search }) => this.likeService.getLikes(post, search).pipe(
      map((likes: Like[]) => likeActions.GetLikesComplete({ post, likes })),
      catchError(async () => likeActions.GetLikesError())
    ))
  ))

  like$ = createEffect(() => this.actions$.pipe(
    ofType(likeActions.LikeActionTypes.likePost),
    mergeMap(({ post }) => this.likeService.like(post).pipe(
      map((likes: Like[]) => likeActions.LikePostComplete({ post, likes })),
      catchError(async () => likeActions.LikePostError())
    ))
  ))
}
