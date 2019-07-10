import { createAction, props, Action } from '@ngrx/store';

export interface PageErrorAction extends Action {
  error: Error
}

export const TypePageError = '[list-people] Error trying to obtain the people page';
export const pageError = createAction(
  TypePageError,
  props<{ error: Error }>()
);