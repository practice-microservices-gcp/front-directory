import { createAction } from '@ngrx/store';

export const logoutSuccessType = '[logout] Logout request was a success';
export const logoutSuccess = createAction(logoutSuccessType);