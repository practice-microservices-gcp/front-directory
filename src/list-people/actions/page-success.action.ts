import { createAction, props } from '@ngrx/store';

export const pageSuccessType = '[list-people] Page obtained successfully';
export const pageSuccess = createAction(
  pageSuccessType,
  props<{page: {[key: string]: string}}>()
);