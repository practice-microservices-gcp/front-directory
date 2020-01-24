import { Action, createReducer, on } from '@ngrx/store';
import { Error } from '../entities';
import * as authUserActions from '../actions';

export interface AuthState {
    loading: boolean,
    loginSuccess: false,
    error: Error
}

export const initialState: AuthState = {
    loading: false,
    error: null,
    loginSuccess: false
}

function onLoginRequest (state: AuthState, action: authUserActions.LoginRequestAction) {
    return Object.assign({...state}, { loading: true, error: null, logginSucces: false });
}

function onLoginSuccess (state: AuthState, action: Action) {
    return Object.assign({...state}, { loading: false, loginSuccess: true });
}

function onLoginError (state: AuthState, action: authUserActions.LoginErrorAction) {
    const error: Error = {
        errorType: action.errorType,
        errorMsg: action.errorMsg
    }
    return Object.assign({...state}, {loading: false, error: error, logginSucces: false})
}

const authUserReducer = createReducer(
    initialState,
    on(authUserActions.loginRequest, onLoginRequest),
    on(authUserActions.loginSuccess, onLoginSuccess),
    on(authUserActions.loginError, onLoginError)
)

export function reducer (state: AuthState | undefined, action: Action) {
    return authUserReducer(state, action)
}