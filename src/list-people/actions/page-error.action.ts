import { createAction, props } from '@ngrx/store';

export const TypePageError = '[list-people] Error trying to obtain the people page';
export const pageError = createAction(
  TypePageError,
  props<{ error: Error }>()
);