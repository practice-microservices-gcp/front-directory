import { Action, createAction, props } from '@ngrx/store';

export interface SavePeopleAction extends Action {
    name: string,
    surname: string,
    email: string
}

export const savePeopleRequestType = '[save-people] Create person request';
export const savePeopleRequest = createAction(
    savePeopleRequestType,
    props<{ name: string, surname: string, email: string }>()
);
