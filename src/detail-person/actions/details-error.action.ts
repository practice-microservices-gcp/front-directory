import { createAction, props, Action } from '@ngrx/store';

export interface DetailsErrorAction extends Action {
  error: Error
}

export const detailErrorType = '[detail-people] Error trying to obtain the details';
export const detailError = createAction(
  detailErrorType,
  props<{ error: Error }>()
);