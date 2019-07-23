import { createReducer, on, Action } from '@ngrx/store';
import * as peopleActions from '../actions';
import { DataTable, ConfigTable } from '../../components';

export interface PeopleState {
  loading: boolean,
  config: ConfigTable[],
  data: DataTable[],
  lastPage: number,
  error: Error,
  page: number,
  limit: number
}

export const initialState: PeopleState = {
  loading: false,
  config: [
    { title: 'Name', name: 'name' },
    { title: 'Surname', name: 'surname' },
    { title: 'Email', name: 'email' }
  ],
  data: [],
  lastPage: 0,
  error: null,
  page: 0,
  limit: 5
}

function onPageRequest (state: PeopleState, action: peopleActions.PageRequestAction ) {
  return Object.assign({...state}, { loading: true, error: null });
}

function onPageSuccess (state: PeopleState, action: peopleActions.PageSuccessAction) {
  return Object.assign(
    {...state},
    {
      loading: false,
      page: action.page,
      limit: action.limit,
      lastPage: action.lastPage,
      data: action.data
    } 
  )
}

function onPageError ( state: PeopleState, action: peopleActions.PageErrorAction ) {
  return Object.assign(
    {...state},
    {
      loading: false,
      error: action.error
    }
  );
}

const listPeopleReducer = createReducer(
  initialState,
  on(peopleActions.pageRequest, onPageRequest),
  on(peopleActions.pageSuccess, onPageSuccess),
  on(peopleActions.pageError, onPageError)
);

export function reducer (state: PeopleState | undefined, action: Action) {
  return listPeopleReducer(state, action);
}