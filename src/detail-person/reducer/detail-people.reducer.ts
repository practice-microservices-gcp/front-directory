import { createReducer, on, Action } from '@ngrx/store';

import { ConfigListProperties, DataListProperties } from '../../components';
import * as detailsActions from '../actions';

export interface DetailState {
  loading: boolean,
  config: ConfigListProperties[],
  data: DataListProperties,
  error: Error
}

export const initialState: DetailState = {
  loading: false,
  config: [
    { title: 'phone', value: 'phone' },
    { title: 'email', value: 'email' }
  ],
  data: [],
  error: null
}

function onDetailRequest (state: DetailState, action: detailsActions.DetailsRequestAction) {
  return Object.assign({...state}, {loading: true, error: null});
}

function onDetailSuccess (state: DetailState, action: detailsActions.DetailsSuccessAction) {
  return Object.assign(
    {...state},
    {
      loading: false,
      data: action.data
    }
  );
}

function onDetailError (state: DetailState, action: detailsActions.DetailsErrorAction) {
  return Object.assign({...state}, { loading: false, error: action.error });
}

const detailsPeopleReducer = createReducer(
  initialState,
  on(detailsActions.detailsRequest, onDetailRequest),
  on(detailsActions.detailsSuccess, onDetailSuccess),
  on(detailsActions.detailError, onDetailError)
);

export function reducer (state: DetailState | undefined, action: Action) {
  return detailsPeopleReducer(state, action);
}
