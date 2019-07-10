import { createAction, props, Action } from '@ngrx/store';

export interface PageRequestAction extends Action {
  page: number
}

export const pageRequestType = '[list-people] Page request';
export const pageRequest = createAction(
  pageRequestType,
  props<{page: number}>()
);