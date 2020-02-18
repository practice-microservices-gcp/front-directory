import { createAction } from '@ngrx/store';

export const loginForbidenNavigationType = '[auth-user] Forbiden Navigation';
export const loginForbidenNavigation = createAction(loginForbidenNavigationType);