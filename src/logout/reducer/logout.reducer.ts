import * as logoutActions from '../actions';
import { Action, createReducer, on } from '@ngrx/store';

export interface LogoutState {
    loading: boolean,
    error: Error,
    logoutSuccess: boolean
}

export const initialState: LogoutState = {
    loading: false,
    error: null,
    logoutSuccess: false
}

function onLogoutRequest(state: LogoutState, action: Action) {
    return Object.assign({...state}, {loading: true, error: null, logoutSuccess: false});
}

function onLogoutSuccess(state: LogoutState, action: Action) {
    return Object.assign({...state}, { loading: false, error: null, logoutSuccess: true});
}

function onLogoutError(state: LogoutState, action: logoutActions.LogoutErrorAction) {
    return Object.assign({...state}, { loading: false, error: action.error, logoutSuccess: false});
}

function onLogoutReset(state: LogoutState, action: Action) {
    return Object.assign({...state}, {loading: false, error: null, logoutSuccess: false});
}

const logoutReducer = createReducer(
    initialState,
    on(logoutActions.logoutRequest, onLogoutRequest),
    on(logoutActions.logoutError, onLogoutError),
    on(logoutActions.logoutSuccess, onLogoutSuccess),
    on(logoutActions.logoutReset, onLogoutReset)
)

export function reducer (state: LogoutState | undefined, action: Action) {
    return logoutReducer(state, action)
}