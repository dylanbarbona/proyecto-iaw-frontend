import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';

import { AuthState, authReducer } from  './auth.reducer';
import { UserState, userReducer } from './user.reducer';

export interface AppState {
  auth: AuthState,
  user: UserState
}

export const reducers: ActionReducerMap<AppState | any> = {
  auth: authReducer,
  user: userReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
