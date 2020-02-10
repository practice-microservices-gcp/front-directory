import { Action, createAction, props } from '@ngrx/store';

export interface LogoutErrorAction extends Action {
    error: Error
}

export const logoutErrorType = '[logout] Error in the logout request';
export const logoutError = createAction(
    logoutErrorType,
    props<{error: Error}>()
)