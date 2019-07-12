import { createSelector } from '@ngrx/store';
import { PeopleState } from '../reducer';
import { ConfigTable, DataTable, PageLimit } from '../entities';

export const FEATURE_LIST_PEOPLE = 'listPeople'

export interface State {
  [FEATURE_LIST_PEOPLE]: PeopleState
}

const configFeature = (state: State) => state[FEATURE_LIST_PEOPLE].config;
const dataFeature = (state: State) => state[FEATURE_LIST_PEOPLE].data;
const pageLimitFeature = (state: State) => ({
  page: state[FEATURE_LIST_PEOPLE].page,
  limit: state[FEATURE_LIST_PEOPLE].limit
});
const loadingFeature = (state: State) => state[FEATURE_LIST_PEOPLE].loading;


export const configSelector = createSelector(
  configFeature,
  (state: ConfigTable[]) => state
);
export const dataSelector = createSelector(
  dataFeature,
  (state: DataTable[]) => state
);
export const pageLimitSelector = createSelector(
  pageLimitFeature,
  (state: PageLimit) => state
);
export const loadingSelector = createSelector(
  loadingFeature,
  (state: boolean) => state
);