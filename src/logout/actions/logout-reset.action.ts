import { createAction } from '@ngrx/store'

export const logoutResetType = '[logout] Reset logout state';
export const logoutReset = createAction(logoutResetType);