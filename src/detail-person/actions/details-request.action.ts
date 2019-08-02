import { createAction, props, Action} from '@ngrx/store';

export interface DetailsRequestAction extends Action {
  id: number;
}

export const detailsRequestType = '[details-people] detail request';
export const detailsRequest = createAction(
  detailsRequestType,
  props<{id: number}>()
);