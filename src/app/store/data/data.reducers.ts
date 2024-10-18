import { createReducer, on } from '@ngrx/store';
import * as dataActions from './data.actions';
import { ProductItem } from 'src/app/core/types/types';

export const dataFeatureKey = 'data';

export interface DataState {
  products: {
    loading: boolean;
    value: ProductItem[];
  }
}

export const initialState: DataState = {
  products: {
    loading: false,
    value: [],
  },
};

export const dataReducer = createReducer(
  initialState,
  on(dataActions.loadProducts, (state): DataState => {
    return {
      ...state,
      products: {
        ...state.products,
        loading: true,
      },
    };
  }),
  on(dataActions.loadProductsSuccess, (state, { data }): DataState => {
    return {
      ...state,
      products: {
        value: data,
        loading: false,
      },
    };
  }),
  on(
    dataActions.loadProductsFailure,
    (state): DataState => ({
      ...state,
      products: {
        ...state.products,
        loading: false,
      },
    })
  )
);
