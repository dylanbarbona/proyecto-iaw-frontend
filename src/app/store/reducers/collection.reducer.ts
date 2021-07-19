import { Action, createReducer, on } from '@ngrx/store';
import * as collectionActions from '../actions/collection.action';
import { EmptyCollection, Collection } from '../../models/collection.model';

export const collectionFeatureKey = 'collection';

export interface CollectionState {
  collections: Collection[],
  collection: Collection,
  error: boolean,
  isLoading: boolean
}

export const initialState: CollectionState = {
  collections: [],
  collection: new EmptyCollection(),
  error: false,
  isLoading: false
};

export const collectionReducer = createReducer(
  initialState,

  //Get
  on(collectionActions.GetCollection, (state) => ({ ...state, isLoading: true, collection: new EmptyCollection() })),
  on(collectionActions.GetCollectionComplete, (state, { collection }) => ({ ...state, isLoading: false, collection })),
  on(collectionActions.GetCollectionError, (state) => ({ ...state, isLoading: false, error: true })),

  //Search
  on(collectionActions.SearchCollections, (state) => ({ ...state, isLoading: true })),
  on(collectionActions.SearchMoreCollections, (state) => ({ ...state, isLoading: true })),
  on(collectionActions.SearchCollectionsComplete, (state, { collections }) => ({ ...state, isLoading: false, collections: state.collections.concat(collections) })),
  on(collectionActions.SearchCollectionsError, (state) => ({ ...state, isLoading: false, error: true })),

  //Create
  on(collectionActions.CreateCollection, (state) => ({ ...state, isLoading: true })),
  on(collectionActions.CreateCollectionComplete, (state, { collection }) => ({ ...state, isLoading: false, collection })),
  on(collectionActions.CreateCollectionError, (state) => ({ ...state, isLoading: false, error: true })),

  //Update
  on(collectionActions.AddPostToCollection, (state) => ({ ...state, isLoading: true })),
  on(collectionActions.AddPostToCollectionComplete, (state, { collection }) => ({ ...state, isLoading: false, collection })),
  on(collectionActions.AddPostToCollectionError, (state) => ({ ...state, isLoading: false, error: true })),

  on(collectionActions.RemovePostFromCollection, (state) => ({ ...state, isLoading: true })),
  on(collectionActions.RemovePostFromCollectionComplete, (state, { collection }) => ({ ...state, isLoading: false, collection })),
  on(collectionActions.RemovePostFromCollectionError, (state) => ({ ...state, isLoading: false, error: true })),

  //Delete
  on(collectionActions.DeleteCollection, (state) => ({ ...state, isLoading: true })),
  on(collectionActions.DeleteCollectionComplete, (state, { collection }) => ({ ...state, isLoading: false })),
  on(collectionActions.DeleteCollectionError, (state) => ({ ...state, isLoading: false, error: true })),
);
