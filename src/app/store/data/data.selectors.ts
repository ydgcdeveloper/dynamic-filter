import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromData from './data.reducers';

export const selectDataState = createFeatureSelector<fromData.DataState>(
  fromData.dataFeatureKey
);

export const selectAllCharacters = createSelector(
  selectDataState,
  (state) => state.characters.value
);

export const selectLoadingCharacters = createSelector(
  selectDataState,
  (state) => state.characters.loading
);

export const selectCharactersPagination = createSelector(
  selectDataState,
  (state) => state.characters.pagination
);
