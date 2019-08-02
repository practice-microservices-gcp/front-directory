import { createSelector } from '@ngrx/store';

import { DetailState } from '../reducer';
import { ConfigListProperties, DataListProperties } from 'src/components';
import { RouterState } from 'src/app';

export const FEATURE_DETAIL_PEOPLE = 'detailPeople';
export const FEATURE_ROUTER = 'router';


export interface State {
  [FEATURE_DETAIL_PEOPLE]: DetailState
  [FEATURE_ROUTER]: {
    state: RouterState
  }
}

const configFeature = (state: State) => state[FEATURE_DETAIL_PEOPLE].config;
const dataFeature = (state: State) => state[FEATURE_DETAIL_PEOPLE].data;
const loadingFeature = (state: State) => state[FEATURE_DETAIL_PEOPLE].loading;
const routerFeature = (state: State) => state[FEATURE_ROUTER].state;

export const configSelector = createSelector(
  configFeature,
  (state: ConfigListProperties[]) => state
);
export const dataSelector = createSelector(
  dataFeature,
  (state: DataListProperties) => state
);
export const loadingSelector = createSelector(
  loadingFeature,
  (state: boolean) => state
);
export const routerSelector = createSelector(
  routerFeature,
  (state: RouterState) => state
);