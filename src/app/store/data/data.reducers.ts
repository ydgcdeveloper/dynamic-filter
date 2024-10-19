import { createReducer, on } from '@ngrx/store';
import * as dataActions from './data.actions';

export const dataFeatureKey = 'data';

export interface DataState {
  characters: {
    loading: boolean;
    value: any;
    pagination: any;
  }
}

export const initialState: DataState = {
  characters: {
    loading: false,
    value: [],
    pagination: null,
  }
};

export const dataReducer = createReducer(
  initialState,
  on(dataActions.loadCharacters, (state): DataState => {
    return {
      ...state,
      characters: {
        ...state.characters,
        loading: true,
      },
    };
  }),
  on(dataActions.loadCharactersSuccess, (state, { data }): DataState => {
    return {
      ...state,
      characters: {
        value: data?.results,
        loading: false,
        pagination: data?.info,
      },
    };
  }),
  on(
    dataActions.loadCharactersFailure,
    (state): DataState => ({
      ...state,
      characters: {
        ...state.characters,
        loading: false,
      },
    })
  )
);
