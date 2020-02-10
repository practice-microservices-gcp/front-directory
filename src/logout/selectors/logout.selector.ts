import { LogoutState } from '../reducer';
import { createSelector } from '@ngrx/store';

export const FEATURE_LOGOUT = 'logout';

export interface State {
    [FEATURE_LOGOUT]: LogoutState
}

const logoutSuccessFeature = (state: State) => state[FEATURE_LOGOUT].logoutSuccess;

export const logoutSuccessSelector = createSelector(
    logoutSuccessFeature,
    (state: boolean) => state
)