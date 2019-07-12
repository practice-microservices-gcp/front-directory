import { createSelector } from '@ngrx/store';
import { PeopleState } from '../reducer';

export const FEATURE_LIST_PEOPLE = 'listPeople'

const configFeature = (state: PeopleState) => state[FEATURE_LIST_PEOPLE].config;
const dataFeature = (state: PeopleState) => state[FEATURE_LIST_PEOPLE].data;
const pageLimitFeature = (state: PeopleState) => ({
  page: state[FEATURE_LIST_PEOPLE].page,
  limit: state[FEATURE_LIST_PEOPLE].limit
});
const loadingFeature = (state: PeopleState) => state[FEATURE_LIST_PEOPLE].loading;


export const configSelector = createSelector(
  configFeature,
  (state: {title: string, name: string}[]) => state
);
export const dataSelector = createSelector(
  dataFeature,
  (state: {[key: string]: any}[]) => state
);
export const pageLimitSelector = createSelector(
  pageLimitFeature,
  (state:{page: number, limit: number}) => state
);
export const loadingSelector = createSelector(
  loadingFeature,
  (state: boolean) => state
);