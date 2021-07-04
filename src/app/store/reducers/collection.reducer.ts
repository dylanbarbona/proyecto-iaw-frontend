import { Action, createReducer, on } from '@ngrx/store';
import * as collectionActions from '../actions/collection.action';
import { Collection } from '../../models/collection.model';

export const collectionFeatureKey = 'collection';

export interface CollectionState {
  collections: Collection[]
  error: boolean,
  isLoading: boolean
}

export const initialState: CollectionState = {
  collections: [],
  error: false,
  isLoading: false
};

export const authReducer = createReducer(
  initialState,
  on(collectionActions.GetCollection, (state) => ({ ...state, isLoading: true })),
  on(collectionActions.GetCollectionComplete, (state, { collection }) => ({ ...state, isLoading: false, collections: state.collections.concat(collection) })),
  on(collectionActions.GetCollectionError, (state) => ({ ...state, isLoading: false, error: true }))
);
