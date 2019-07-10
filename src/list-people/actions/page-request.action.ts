import { createAction, props } from '@ngrx/store';

export const pageRequest = createAction(
  '[list-people] Page request',
  props<{page: number}>()
);