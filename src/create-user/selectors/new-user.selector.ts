import { NewUserState } from '../reducer';
import { createSelector } from '@ngrx/store';
import { Notification } from '../entities';

export const FEATURE_CREATE_USER = 'createUser';

export interface State {
    [FEATURE_CREATE_USER]: NewUserState
}

const loadingFeature = (state: State) => state[FEATURE_CREATE_USER].loading;
const notificationFeature = (state: State) => state[FEATURE_CREATE_USER].notification;

export const loadingSelector = createSelector(
    loadingFeature,
    (state: boolean) => state
);

export const notificationSelector = createSelector(
    notificationFeature,
    (state: Notification) => state
);
