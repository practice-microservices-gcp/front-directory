import { createAction } from '@ngrx/store';

export const loginSuccessType = '[auth-user] Login success';
export const loginSuccess = createAction(loginSuccessType);