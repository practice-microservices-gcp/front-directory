import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import {
  PageRequestAction,
  pageRequestType,
  pageSuccess,
  pageError
} from '../actions';
import { PeopleRepositoryService } from '../../repositories';

@Injectable()
export class ListPeopleEffects {

  public loadPagePeopl$ = createEffect(
    () => {
      return this.action$
      .pipe(
        ofType(pageRequestType),
        switchMap((action: PageRequestAction) => {
          const offset = action.page * action.limit;
          
          return this.peopleRepo.getOnePagePeople(offset, action.limit)
        }),
        map((response: any) => {
          const page = Math.ceil(response.offset/response.limit);
          const lastPage = Math.ceil(response.total/response.limit) - 1;
          const action = pageSuccess({
            page: page,
            limit: response.limit,
            lastPage: lastPage,
            data: response.data
          });

          return action
        }),
        catchError((err: any) => {
          return of(pageError({ error: err }))
        })
      )
    }
  )
  constructor(
    private action$: Actions,
    private peopleRepo: PeopleRepositoryService
  ) {}
}