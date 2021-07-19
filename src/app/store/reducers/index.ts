import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';

import { AuthState, authReducer } from  './auth.reducer';
import { categoryReducer, CategoryState } from './category.reducer';
import { collectionReducer, CollectionState } from './collection.reducer';
import { postReducer, PostState } from './post.reducer';
import { UserState, userReducer } from './user.reducer';

export interface AppState {
  auth: AuthState,
  user: UserState,
  post: PostState,
  category: CategoryState,
  collection: CollectionState
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  user: userReducer,
  post: postReducer,
  category: categoryReducer,
  collection: collectionReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
