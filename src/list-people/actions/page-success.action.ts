import { createAction, props, Action } from '@ngrx/store';

export interface PageSuccessAction extends Action {
  page: number,
  data: { [key: string]: any }
}
export const pageSuccessType = '[list-people] Page obtained successfully';
export const pageSuccess = createAction(
  pageSuccessType,
  props<{page: number, data: {[key:string]: any}}>()
);