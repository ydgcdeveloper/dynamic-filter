import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCharacters, login, logOut } from './data.actions';
import {
  selectAllCharacters,
  selectCharactersPagination,
  selectLoadingCharacters,
} from './data.selectors';

@Injectable({
  providedIn: 'root',
})
export class DataStoreService {
  characters$ = this.store.select(selectAllCharacters);
  loadingCharacters$ = this.store.select(selectLoadingCharacters);
  charactersPagination$ = this.store.select(selectCharactersPagination);

  constructor(private readonly store: Store) {}

  loadCharacters(params: any) {
    this.store.dispatch(loadCharacters({ params }));
  }

  login(params: any) {
    this.store.dispatch(login({ params }));
  }

  logOut(){
    this.store.dispatch(logOut());
  }
}
