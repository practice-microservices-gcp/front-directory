import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap, map, catchError} from 'rxjs/operators';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { UserRepositoryService } from '../../repositories';
import * as newUserActions from '../actions';
import { NoticeType } from '../../components';

@Injectable()
export class CreateUserEffects {

    public newUser$ = createEffect(
        () => this.action$
        .pipe(
            ofType(newUserActions.NewUserRequestType),
            switchMap((action: newUserActions.NewUserRequestAction) => {
                return this.userRepo.createNewUser(action.email, action.password)
            }),
            map((response: any) => {
                return newUserActions.newUserSuccess()
            }),
            catchError((err: any) => {
                let errorType: NoticeType;
                let errorMsg: string;

                switch(err.code) {
                    case 'auth/email-already-in-use':
                        errorType = 'warning';
                        errorMsg = 'Email already in use. Please choose another';
                    break;
                    case 'auth/invalid-email':
                        errorType = 'warning';
                        errorMsg = 'Email with wrong format';
                    break;
                    case 'auth/weak-password':
                        errorType = 'warning';
                        errorMsg = 'Password too week';
                    default:
                        errorType = 'error';
                        errorMsg = 'An unexpected error has happened. Please contact with the administrator'
                }
                

                return of(newUserActions.newUserError({
                    errorType: errorType,
                    errorMsg: errorMsg
                }));
            })
        )
    );

    constructor(
        private action$: Actions,
        private userRepo: UserRepositoryService
    ) {}
}