import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PeopleRepositoryService } from 'src/repositories';
import { savePeopleRequestType, SavePeopleAction, savePeopleSuccess, savePeopleError} from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class SavePeopleEffects {

    public saveUser$ = createEffect(
        () => {
            return this.action$
            .pipe(
                ofType(savePeopleRequestType),
                switchMap((action: SavePeopleAction) => {
                    return this.peopleRepo.saveOnePeople(action.name, action.surname, action.email)
                }),
                map(() => {
                    return savePeopleSuccess()
                }),
                catchError((err: any) => {
                    const action = savePeopleError({ error: err });

                    return of(action);
                })
            )
        }
    );

    constructor(
        private action$: Actions,
        private peopleRepo: PeopleRepositoryService
    ) {}
}