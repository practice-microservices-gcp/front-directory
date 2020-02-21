import { FEATURE_LIST_PEOPLE, PeopleState } from '../../list-people';
import { FEATURE_SAVE_PEOPLE, SavePeopleState } from '../../save_people';
import { FEATURE_LOGOUT, LogoutState } from 'src/logout';
import { createSelector } from '@ngrx/store';

export interface State {
    [FEATURE_LIST_PEOPLE]: PeopleState,
    [FEATURE_SAVE_PEOPLE]: SavePeopleState,
    [FEATURE_LOGOUT]: LogoutState
}

const loadingFeature = (state: State) => state;


export const loadingSelector = createSelector(
    loadingFeature,
    (state: State) =>
    state[FEATURE_LIST_PEOPLE].loading ||
    state[FEATURE_SAVE_PEOPLE].loading ||
    state[FEATURE_LOGOUT].loading
)
