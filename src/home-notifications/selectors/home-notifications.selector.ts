import { createSelector } from '@ngrx/store';

import { FEATURE_LIST_PEOPLE, PeopleState } from '../../list-people';
import { FEATURE_SAVE_PEOPLE, SavePeopleState } from '../../save_people';
import { FEATURE_LOGOUT, LogoutState} from 'src/logout';

export interface State {
    [FEATURE_LIST_PEOPLE]: PeopleState,
    [FEATURE_SAVE_PEOPLE]: SavePeopleState,
    [FEATURE_LOGOUT]: LogoutState
}

const errorListPeopleFeature = (state: State) => state[FEATURE_LIST_PEOPLE].error;
const errorSavePeopleFeature = (state: State) => state[FEATURE_SAVE_PEOPLE].error;
const successSavePeopleFeature = (state: State) => state[FEATURE_SAVE_PEOPLE].saveSuccess;
const errorLogoutFeature = (state: State) => state[FEATURE_LOGOUT].error;

export const errorListPeopleSelector = createSelector(
    errorListPeopleFeature,
    (state: Error) => state
);

export const errorSavePeopleSelector = createSelector(
    errorSavePeopleFeature,
    (state: Error) => state
);

export const successSavePeopleSelector = createSelector(
    successSavePeopleFeature,
    (state: boolean) => state
);

export const errorLogoutSelector = createSelector(
    errorLogoutFeature,
    (state: Error) => state
);