import { Action, createReducer, on } from '@ngrx/store';
import { Error } from '../entities';
import * as authUserActions from '../actions';

export interface AuthState {
    loading: boolean,
    error: Error,
    allowNavigation: boolean
}

export const initialState: AuthState = {
    loading: false,
    error: null,
    allowNavigation: false
}

function onLoginRequest (state: AuthState, action: authUserActions.LoginRequestAction) {
    return Object.assign({...state}, { loading: true, error: null, allowNavigation: false });
}

function onLoginSuccess (state: AuthState, action: Action) {
    return Object.assign({...state}, { loading: false, error: null, allowNavigation: true });
}

function onLoginError (state: AuthState, action: authUserActions.LoginErrorAction) {
    const error: Error = {
        errorType: action.errorType,
        errorMsg: action.errorMsg
    }
    return Object.assign({...state}, {loading: false, error: error, allowNavigation: false})
}

function onForbidenNavigation (state: AuthState, action: Action) {
    return Object.assign({...state}, { allowNavigation: false });
}

const authUserReducer = createReducer(
    initialState,
    on(authUserActions.loginRequest, onLoginRequest),
    on(authUserActions.loginSuccess, onLoginSuccess),
    on(authUserActions.loginError, onLoginError),
    on(authUserActions.loginForbidenNavigation, onForbidenNavigation)
)

export function reducer (state: AuthState | undefined, action: Action) {
    return authUserReducer(state, action)
}