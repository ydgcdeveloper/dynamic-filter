import { createAction, props } from '@ngrx/store';

export const loadCharacters = createAction(
  '[Data] Load Characters',
  props<{ params: any }>()
);
export const loadCharactersSuccess = createAction(
  '[Data] Load Characters Success',
  props<{ data: any }>()
);
export const loadCharactersFailure = createAction(
  '[Data] Load Characters Failure',
  props<{ error: any }>()
);

export const login = createAction('[Auth] Login', props<{ params: any }>());
export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ data: any }>()
);
export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

export const logOut = createAction('[Auth] logOut');
export const logOutSuccess = createAction(
  '[Auth] logOut Success',
  props<{ data: any }>()
);
export const logOutFailure = createAction(
  '[Auth] logOut Failure',
  props<{ error: any }>()
);