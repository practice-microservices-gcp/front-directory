import { createAction } from '@ngrx/store';

export const newUserSuccessType = '[new user] user created';
export const newUserSuccess = createAction(newUserSuccessType);