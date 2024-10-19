import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, exhaustMap, map, of} from 'rxjs';
import * as dataActions from './data.actions';
import { DataService } from 'src/app/core/services/data.service';

@Injectable()
export class DataEffects {
    loadCharacters$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(dataActions.loadCharacters),
            exhaustMap((action) =>
                this.dataService.getCharacters(action.params).pipe(
                    map((data) =>
                        dataActions.loadCharactersSuccess({
                            data
                        })
                    ),
                    catchError((error) =>
                        of(dataActions.loadCharactersFailure({error}))
                    )
                )
            )
        );
    });
    constructor(
        private actions$: Actions,
        private dataService: DataService
    ) {}
}
