import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';

import { AuthState, authReducer } from  './auth.reducer';
import { postReducer, PostState } from './post.reducer';
import { UserState, userReducer } from './user.reducer';

export interface AppState {
  auth: AuthState,
  user: UserState,
  post: PostState,
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  user: userReducer,
  post: postReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
