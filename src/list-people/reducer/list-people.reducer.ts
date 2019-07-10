import { createReducer, on } from '@ngrx/store';
import * as peopleActions from '../actions';

export interface PeopleState {
  loading: boolean,
  config: {[key: string]: string}[],
  data: {[key: string]: any}[],
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

export const listPeopleReducer = createReducer(
  initialState,
  on(peopleActions.pageRequest, onPageRequest),
  on(peopleActions.pageSuccess, onPageSuccess),
  on(peopleActions.pageError, onPageError)
);