import { createAction } from '@ngrx/store';

export const logoutRequestType = '[logout] logout request';
export const logoutRequest = createAction(logoutRequestType);
