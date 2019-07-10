import { createAction, props } from '@ngrx/store';

export const pageRequestType = '[list-people] Page request';
export const pageRequest = createAction(
  pageRequestType,
  props<{page: number}>()
);