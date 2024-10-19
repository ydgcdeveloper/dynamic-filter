import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import * as dataActions from './data.actions';
import { DataService } from 'src/app/core/services/data/data.service';
import { CommonService } from 'src/app/core/services/common/common.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Injectable()
export class DataEffects {
  loadCharacters$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(dataActions.loadCharacters),
      exhaustMap((action) =>
        this.dataService.getCharacters(action.params).pipe(
          map((data) =>
            dataActions.loadCharactersSuccess({
              data,
            })
          ),
          catchError((error) => {
            this.common.presentErrorToast('Error loading characters');
            return of(dataActions.loadCharactersFailure({ error }));
          })
        )
      )
    );
  });

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(dataActions.login),
      exhaustMap((action) =>
        this.authService.login(action.params).pipe(
          map((data) =>
            dataActions.loginSuccess({
              data,
            })
          ),
          catchError((error) => of(dataActions.loginFailure({ error })))
        )
      )
    );
  });

  logOut$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(dataActions.logOut),
      exhaustMap(() =>
        this.authService.logout().pipe(
          map((data) =>
            dataActions.logOutSuccess({
              data,
            })
          ),
          catchError((error) => of(dataActions.logOutFailure({ error })))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private dataService: DataService,
    private common: CommonService,
    private authService: AuthService
  ) {}
}
