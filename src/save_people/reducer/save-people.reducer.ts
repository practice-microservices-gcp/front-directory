import * as savePersonAction from '../actions';
import { Action, createReducer, on } from '@ngrx/store';


export interface SavePeopleState {
    loading: boolean,
    saveSuccess: boolean,
    error: Error
}

export const initialState: SavePeopleState = {
    loading: false,
    error: null,
    saveSuccess: false
}

function onSavePersonRequest (state: SavePeopleState, action: savePersonAction.SavePeopleAction) {
    return Object.assign({...state}, { loading: true, error: null, saveSuccess: false});
}

function onSavePersonSuccess (state: SavePeopleState, action: Action) {
    return Object.assign({...state}, {loading: false, error: null, saveSuccess: true})
}

function onSavePersonError (state: SavePeopleState, action: savePersonAction.SavePeopleErrorAction) {
    return Object.assign({...state}, { loading: false, error: action.error, saveSuccess: false});
}

function onSavePersonRestore (state: SavePeopleState, action: Action) {
    return Object.assign({...state}, { loading: false, error: null, saveSuccess: false});
}

const savePeopleReducer = createReducer(
    initialState,
    on(savePersonAction.savePeopleRequest, onSavePersonRequest),
    on(savePersonAction.savePeopleSuccess, onSavePersonSuccess),
    on(savePersonAction.savePeopleError, onSavePersonError),
    on(savePersonAction.savePeopleRestore, onSavePersonRestore)
);

export function reducer (state: SavePeopleState | undefined, action: Action) {
    return savePeopleReducer(state, action)
}