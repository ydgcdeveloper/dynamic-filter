import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromData from './data.reducers';

export const selectDataState = createFeatureSelector<fromData.DataState>(
  fromData.dataFeatureKey
);

export const selectAllProducts = createSelector(
  selectDataState,
  (state) => state.products.value
);

export const selectLoadingProducts= createSelector(
  selectDataState,
  (state) => state.products.loading
);
