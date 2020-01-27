import { Notification } from '../entities';
import * as newUserActions from '../actions';
import { Action, createReducer, on } from '@ngrx/store';

export interface NewUserState {
    loading: boolean,
    notification: Notification
}

export const initialState: NewUserState = {
    loading: false,
    notification: null
}

function onNewUserRequest (state: NewUserState, action: newUserActions.NewUserRequestAction) {
    return Object.assign({...state}, {loading: true, notification: null})
}

function onNewUserSuccess (state: NewUserState, action: Action) {
    const notification: Notification = {
        type: 'notification',
        message: 'User created successfully'
    }
    return Object.assign({...state}, {loading: false, notification: notification})
}

function onNewUserError (state: NewUserState, action: newUserActions.NewUserErrorAction) {
    const notification: Notification = {
        type: action.errorType,
        message: action.errorMsg
    }

    return Object.assign({...state}, {loading: false, notification: notification})
}

const newUserReducer = createReducer(
    initialState,
    on(newUserActions.newUserRequest, onNewUserRequest),
    on(newUserActions.newUserSuccess, onNewUserSuccess),
    on(newUserActions.newUserError, onNewUserError)
);

export function reducer (state: NewUserState | undefined, action: Action) {
    return newUserReducer(state, action)
}