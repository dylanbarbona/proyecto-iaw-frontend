import { NgModule } from "@angular/core";

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthEffects } from './effects/auth.effect';
import { UserEffects } from './effects/user.effect';

import { authFeatureKey, authReducer } from './reducers/auth.reducer';
import { userFeatureKey, userReducer } from './reducers/user.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(authFeatureKey, authReducer),
    StoreModule.forFeature(userFeatureKey, userReducer),
    EffectsModule.forFeature([
      AuthEffects,
      UserEffects
    ]),
  ]
})
export class NgrxModule{ }
