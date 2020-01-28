import { createAction } from '@ngrx/store';

export const savePeopleSuccessType = '[save-people] Person saved successfully';
export const savePeopleSuccess = createAction(
    savePeopleSuccessType
)