import { createAction, props, Action } from '@ngrx/store';

export interface LoginRequestAction extends Action {
    email: string,
    password: string
}

export const loginRequestType = '[auth-user] Login request';
export const loginRequest = createAction(
    loginRequestType,
    props<{email: string, password: string}>()
);