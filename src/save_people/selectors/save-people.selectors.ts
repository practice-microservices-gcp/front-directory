import { SavePeopleState } from '../reducer';
import { createSelector } from '@ngrx/store';

export const FEATURE_SAVE_PEOPLE = 'savePeople';

export interface State {
    [FEATURE_SAVE_PEOPLE]: SavePeopleState
}

const loadingFeature = (state: State) => state[FEATURE_SAVE_PEOPLE].loading;
const saveSuccessFeature = (state: State) => state[FEATURE_SAVE_PEOPLE].saveSuccess;
const errorFeature = (state: State) => state[FEATURE_SAVE_PEOPLE].error;

export const loadingSelector = createSelector(
    loadingFeature,
    (state: boolean) => state
)

export const saveSuccessSelector = createSelector(
    saveSuccessFeature,
    (state: boolean) => state
)

export const errorSelector = createSelector(
    errorFeature,
    (state: Error) => state
)