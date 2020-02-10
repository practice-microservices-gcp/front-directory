import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { UserRepositoryService } from 'src/repositories'
import { logoutRequestType, logoutSuccess, logoutError } from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class LogoutEffects {

    public logout$ = createEffect(
        () => this.action$
        .pipe(
            ofType(logoutRequestType),
            switchMap(() => this.userRepo.logout()),
            map(() => logoutSuccess()),
            catchError((err: any) => of(logoutError({ error: err })))
        )
    )

    constructor(
        private action$: Actions,
        private userRepo: UserRepositoryService
    ){}
}