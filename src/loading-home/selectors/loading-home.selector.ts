import { FEATURE_LIST_PEOPLE, PeopleState } from '../../list-people';
import { FEATURE_SAVE_PEOPLE, SavePeopleState } from '../../save_people';
import { FEATURE_LOGOUT, LogoutState } from 'src/logout';
import { createSelector } from '@ngrx/store';

export interface State {
    [FEATURE_LIST_PEOPLE]: PeopleState,
    [FEATURE_SAVE_PEOPLE]: SavePeopleState,
    [FEATURE_LOGOUT]: LogoutState
}

const loadingListPeopleFeature = (state: State) => state;
const loadingSavePeopleFeature = (state: State) => state;
const loadingLogoutFeature = (state: State) => state;

export const loadingListPeopleSelector = createSelector(
    loadingListPeopleFeature,
    (state: State) => state[FEATURE_LIST_PEOPLE].loading
);

export const loadingSavePeopleSelector = createSelector(
    loadingSavePeopleFeature,
    (state: State) => state[FEATURE_SAVE_PEOPLE].loading
)

export const loadingLogoutSelector = createSelector(
    loadingLogoutFeature,
    (state: State) => state[FEATURE_LOGOUT].loading
)

