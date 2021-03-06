import { createSelector } from '@ngrx/store';
import { PeopleState } from '../reducer';
import { PaginationParams } from '../entities';
import { ConfigTable, DataTable } from '../../components';

export const FEATURE_LIST_PEOPLE = 'listPeople'

export interface State {
  [FEATURE_LIST_PEOPLE]: PeopleState
}

const configFeature = (state: State) => state[FEATURE_LIST_PEOPLE].config;
const dataFeature = (state: State) => state[FEATURE_LIST_PEOPLE].data;
const pageLimitFeature = (state: State) => ({
  page: state[FEATURE_LIST_PEOPLE].page,
  limit: state[FEATURE_LIST_PEOPLE].limit,
  lastPage: state[FEATURE_LIST_PEOPLE].lastPage
});
const loadingFeature = (state: State) => state[FEATURE_LIST_PEOPLE].loading;
const errorFeature = (state: State) => state[FEATURE_LIST_PEOPLE].error


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
  (state: PaginationParams) => state
);
export const loadingSelector = createSelector(
  loadingFeature,
  (state: boolean) => state
);

export const errorSelector = createSelector(
  errorFeature,
  (state: Error) => state
);