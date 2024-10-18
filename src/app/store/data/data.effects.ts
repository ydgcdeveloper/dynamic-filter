import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, exhaustMap, map, of} from 'rxjs';
import * as dataActions from './data.actions';
import { DataService } from 'src/app/core/services/data.service';

@Injectable()
export class DataEffects {
    loadProducts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(dataActions.loadProducts),
            exhaustMap(() =>
                this.dataService.getProducts().pipe(
                    map((data) =>
                        dataActions.loadProductsSuccess({
                            data
                        })
                    ),
                    catchError((error) =>
                        of(dataActions.loadProductsFailure({error}))
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
