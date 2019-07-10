import { createAction, props } from '@ngrx/store';

export const pageSuccess = createAction(
  '[list-people] Page obtained successfully',
  props<{page: {[key: string]: string}}>()
);