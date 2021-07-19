import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, mergeMap, map, tap } from 'rxjs/operators';

import * as CollectionActions from '../actions/collection.action';
import { CollectionService } from '../../services/collection.service';

@Injectable()
export class CollectionEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly collectionService: CollectionService) { }

  getCollection$ = createEffect(() => this.actions$.pipe(
    ofType(CollectionActions.CollectionActionTypes.getCollection),
    mergeMap((_id) => this.collectionService.get({ _id }).pipe(
      map(collection => CollectionActions.GetCollectionComplete({ collection })),
      catchError(async () => CollectionActions.GetCollectionError())
    )),
  ))

  getAllCollections$ = createEffect(() => this.actions$.pipe(
    ofType(CollectionActions.CollectionActionTypes.getCollection, CollectionActions.CollectionActionTypes.searchMoreCollections),
    mergeMap(() => this.collectionService.getAll().pipe(
      map(collections => CollectionActions.SearchCollectionsComplete({ collections })),
      catchError(async () => CollectionActions.SearchCollectionsError())
    )),
  ))

  createCollection$ = createEffect(() => this.actions$.pipe(
    ofType(CollectionActions.CollectionActionTypes.createCollection),
    mergeMap(({ input }) => this.collectionService.create(input).pipe(
      map(collection => CollectionActions.CreateCollectionComplete({ collection })),
      catchError(async () => CollectionActions.CreateCollectionError())
    )),
  ))

  addPostToCollection$ = createEffect(() => this.actions$.pipe(
    ofType(CollectionActions.CollectionActionTypes.addPostToCollection),
    mergeMap(({ search, input }) => this.collectionService.addPost(search, input).pipe(
      map(collection => CollectionActions.AddPostToCollectionComplete({ collection })),
      catchError(async () => CollectionActions.AddPostToCollectionError())
    )),
  ))

  removePostFromCollection$ = createEffect(() => this.actions$.pipe(
    ofType(CollectionActions.CollectionActionTypes.removePostFromCollection),
    mergeMap(({ search, input }) => this.collectionService.removePost(search, input).pipe(
      map(collection => CollectionActions.RemovePostFromCollectionComplete({ collection })),
      catchError(async () => CollectionActions.RemovePostFromCollectionError())
    )),
  ))

  deleteCollection$ = createEffect(() => this.actions$.pipe(
    ofType(CollectionActions.CollectionActionTypes.deleteCollection),
    mergeMap(({ search }) => this.collectionService.delete(search).pipe(
      map(collection => CollectionActions.DeleteCollectionComplete({ collection })),
      catchError(async () => CollectionActions.DeleteCollectionError())
    )),
  ))
}
