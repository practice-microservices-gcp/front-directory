import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError} from 'rxjs/operators';

import { UserRepositoryService } from '../../repositories';
import { loginRequestType, LoginRequestAction, loginSuccess, loginError } from '../actions';

@Injectable()
export class AuthUserEffects {

    public loginUser$ = createEffect(
        () => {
            return this.action$
            .pipe(
                ofType(loginRequestType),
                switchMap((action: LoginRequestAction) => {
                    return this.userRepo.doLogin(action.email, action.password)
                }),
                map((response: any) => {
                    return loginSuccess()
                }),
                catchError((err: any) => {
                    let errorType = null;
                    let errorMsg = null;
    
                    switch(err.code) {
                        case 'auth/invalid-email':
                        case 'auth/wrong-password':
                            errorType = 'warning';
                            errorMsg = 'Incorrect user or password'
                        break;
                        case 'auth/user-disabled':
                            errorType = 'error';
                            errorMsg = 'Your user is disabled. Please contact with the administrator';
                        break;
                        case 'auth/user-not-found':
                            errorType = 'error';
                            errorMsg = 'You don\'t have created an account, yet. Click on "new user" to do it'
                        break;
                        default:
                            errorType = 'error';
                            errorMsg = 'An unexpected error has happened. Please contact with the administrator';
                        break;
                    };
    
                    return of(loginError({
                        errorType: errorType,
                        errorMsg: errorMsg
                    }));
                })
            )
        }
    );

    constructor(
        private action$: Actions,
        private userRepo: UserRepositoryService
    ) { }
}