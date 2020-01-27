import { Action, createAction, props } from '@ngrx/store';

export interface NewUserRequestAction extends Action {
    email: string,
    password: string
}

export const NewUserRequestType = '[create-user] New user request'
export const newUserRequest = createAction(
    NewUserRequestType,
    props<{email: string, password: string}>()
);