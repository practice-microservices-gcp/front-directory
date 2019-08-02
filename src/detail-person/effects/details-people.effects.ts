import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';

import { PeopleRepositoryService } from 'src/repositories';
import {
  detailsRequestType, DetailsRequestAction, detailsSuccess, detailError
} from '../actions';
import { DataListProperties } from 'src/components';

@Injectable()
export class DetailsPeopleEffects {

  public loadDetailPeople$ = createEffect(
    () => {
      return this.action$
      .pipe(
        ofType( detailsRequestType ),
        switchMap((action: DetailsRequestAction) => {
          return this.peopleRepo.getOnePerson(action.id)
        }),
        map((response: DataListProperties) => {
          const action = detailsSuccess({
            data: response
          });

          return action;
        }),
        catchError((err: any) => of(detailError({error:err})))
      );
    }
  )

  constructor(
    private action$: Actions,
    private peopleRepo: PeopleRepositoryService
  ) {}
}