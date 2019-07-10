import { createAction, props } from '@ngrx/store';

export const pageError = createAction(
  '[list-people] Error trying to obtain the people page',
  props<{ error: Error }>()
);