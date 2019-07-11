import { createSelector } from '@ngrx/store';
import { PeopleState } from '../reducer';

const configFeature = (state: PeopleState) => state.config;
const dataFeature = (state: PeopleState) => state.data;
const pageLimitFeature = (state: PeopleState) => ({
  page: state.page,
  limit: state.limit
});
const loadingFeature = (state: PeopleState) => state.loading;


export const configSelector = createSelector(
  configFeature,
  (state: {[key: string]: string}[]) => state
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