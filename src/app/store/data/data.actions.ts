import { createAction, props } from "@ngrx/store";

  export const loadCharacters = createAction(
    '[Data] Load Characters',
    props<{ params: any}>()
  );
  export const loadCharactersSuccess = createAction(
    '[Data] Load Characters Success',
    props<{ data: any}>()
  );
  export const loadCharactersFailure = createAction(
    '[Data] Load Characters Failure',
    props<{ error: any }>()
  );
