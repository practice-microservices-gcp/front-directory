import { Action, createAction, props } from '@ngrx/store';

export interface SavePeopleErrorAction extends Action {
    error: Error
}

export const savePeopleErrorType = '[save-people] Error saving person';
export const savePeopleError = createAction(
    savePeopleErrorType,
    props<{ error: Error }>()
);
