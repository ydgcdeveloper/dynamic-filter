import { isDevMode } from '@angular/core';
import {
  MetaReducer
} from '@ngrx/store';
import * as dataReducer from './data';

export interface AppState {
  dataState: dataReducer.DataState;
}

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];