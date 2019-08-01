import { createAction, props, Action} from '@ngrx/store';

export interface DetailsRequestAction extends Action {
  id: string;
}

export const detailsRequestType = '[details-people] detail request';
export const detailsRequest = createAction(
  detailsRequestType,
  props<{id: string}>()
);