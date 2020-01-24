
import { AuthState } from '../reducer';
import { createSelector } from '@ngrx/store';
import { Error } from '../entities';

export const FEATURE_AUTH_USER = 'authUser';

export interface State {
    [FEATURE_AUTH_USER]: AuthState
}

const loadingFeature = (state: State) => state[FEATURE_AUTH_USER].loading;
const loginSuccessFeature = (state: State) => state[FEATURE_AUTH_USER].loginSuccess;
const errorFeature = (state: State) => state[FEATURE_AUTH_USER].error;

export const loadingSelector = createSelector(
    loadingFeature,
    (state: boolean) => state
)

export const loginSuccessSelector = createSelector(
    loginSuccessFeature,
    (state: boolean) => state
)

export const errorSelector = createSelector(
    errorFeature,
    (state: Error) => state
)