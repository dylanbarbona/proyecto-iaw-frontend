import { NgModule } from "@angular/core";

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthEffects } from './effects/auth.effect';
import { UserEffects } from './effects/user.effect';
import { PostEffects } from './effects/post.effect';
import { LikeEffects } from "./effects/like.effect";
import { CommentEffect } from "./effects/comment.effect";

import { authFeatureKey, authReducer } from './reducers/auth.reducer';
import { userFeatureKey, userReducer } from './reducers/user.reducer';
import { postFeatureKey, postReducer } from "./reducers/post.reducer";

@NgModule({
  imports: [
    StoreModule.forFeature(authFeatureKey, authReducer),
    StoreModule.forFeature(userFeatureKey, userReducer),
    StoreModule.forFeature(postFeatureKey, postReducer),
    EffectsModule.forFeature([
      AuthEffects,
      UserEffects,
      PostEffects,
      LikeEffects,
      CommentEffect,
    ]),
  ]
})
export class NgrxModule{ }
