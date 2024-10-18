import { createAction, props } from "@ngrx/store";

  export const loadProducts = createAction(
    '[Data] Load Products',
  );
  export const loadProductsSuccess = createAction(
    '[Data] Load Products Success',
    props<{ data: any}>()
  );
  export const loadProductsFailure = createAction(
    '[Data] Load Products Failure',
    props<{ error: any }>()
  );
