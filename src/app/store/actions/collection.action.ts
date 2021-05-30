import { createAction, props } from '@ngrx/store';
import { SearchCollectionInput, CreateCollectionInput, UpdateCollectionInput } from '../../interfaces/collection.interface';
import { Collection } from '../../models/collection.model';

export enum CollectionActionTypes {
  getCollection  = '[Collection] GET_COLLECTION',
  getCollectionComplete = '[Collection] GET_COLLECTION_COMPLETE',
  getCollectionError = '[Collection] GET_COLLECTION_ERROR',

  searchCollections  = '[Collection] SEARCH_COLLECTIONS',
  searchMoreCollections  = '[Collection] SEARCH_MORE_COLLECTIONS',
  searchCollectionsComplete = '[Collection] SEARCH_COLLECTIONS_COMPLETE',
  searchCollectionsError = '[Collection] SEARCH_COLLECTIONS_ERROR',

  createCollection  = '[Collection] CREATE_COLLECTION',
  createCollectionComplete = '[Collection] CREATE_COLLECTION_COMPLETE',
  createCollectionError = '[Collection] CREATE_COLLECTION_ERROR',

  updateCollection = '[Collection] UPDATE_COLLECTION',
  updateCollectionComplete = '[Collection] UPDATE_COLLECTION_COMPLETE',
  updateCollectionError = '[Collection] UPDATE_COLLECTION_ERROR',

  deleteCollection = '[Collection] DELETE_COLLECTION',
  deleteCollectionComplete = '[Collection] DELETE_COLLECTION_COMPLETE',
  deleteCollectionError = '[Collection] DELETE_COLLECTION_ERROR',
}


//GET
export const GetCollection = createAction(
  CollectionActionTypes.getCollection,
  props<{ search: SearchCollectionInput }>()
)

export const GetCollectionComplete = createAction(
  CollectionActionTypes.getCollectionComplete,
  props<{ collection: Collection }>()
)

export const GetCollectionError = createAction(
  CollectionActionTypes.getCollectionError
)

//SEARCH
export const SearchCollections = createAction(
  CollectionActionTypes.searchCollections,
  props<{ search: SearchCollectionInput }>()
)

export const SearchMoreCollections = createAction(
  CollectionActionTypes.searchMoreCollections,
  props<{ search: SearchCollectionInput }>()
)

export const SearchCollectionsComplete = createAction(
  CollectionActionTypes.searchCollectionsComplete,
  props<{ collections: Collection[] }>()
)

export const SearchCollectionsError = createAction(
  CollectionActionTypes.searchCollectionsError
)

//CREATE
export const CreateCollection = createAction(
  CollectionActionTypes.createCollection,
  props<{ input: CreateCollectionInput }>()
)

export const CreateCollectionComplete = createAction(
  CollectionActionTypes.createCollectionComplete,
  props<{ collection: Collection }>()
)

export const CreateCollectionError = createAction(
  CollectionActionTypes.createCollectionError
)

//UPDATE
export const UpdateCollection = createAction(
  CollectionActionTypes.updateCollection,
  props<{ search: SearchCollectionInput, input: UpdateCollectionInput }>()
)

export const UpdateCollectionComplete = createAction(
  CollectionActionTypes.updateCollectionComplete,
  props<{ collection: Collection }>()
)

export const UpdateCollectionError = createAction(
  CollectionActionTypes.updateCollectionError
)

//DELETE
export const DeleteCollection = createAction(
  CollectionActionTypes.deleteCollection,
  props<{ search: SearchCollectionInput }>()
)

export const DeleteCollectionComplete = createAction(
  CollectionActionTypes.deleteCollectionComplete,
  props<{ collection: Collection }>()
)

export const DeleteCollectionError = createAction(
  CollectionActionTypes.deleteCollectionError
)
